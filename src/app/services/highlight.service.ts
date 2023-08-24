import { Injectable, Inject } from '@angular/core';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import 'prismjs';
import 'prismjs/plugins/command-line/prism-command-line';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx.min';
// ... probably more, check out node_modules/prismjs/components

declare var Prism: any;

@Injectable({ providedIn: 'root' })
export class HighlightService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }
}