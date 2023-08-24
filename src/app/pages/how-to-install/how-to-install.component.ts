import { Component, AfterViewChecked } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-how-to-install',
  templateUrl: './how-to-install.component.html',
  styleUrls: ['./how-to-install.component.css']
})
export class HowToInstallComponent implements AfterViewChecked {
  constructor(private highlightService: HighlightService, private clipboard: Clipboard) {}

  componentSnippet = '<button class=\"btn\">button</button>';
  importSnippet = 'const plugin = require(\'@cramzzzberry/almost-material-plugin\')\n\nmodule.exports = {\n  plugins: [plugin.almostMaterial],\n}';
  cmdSnippet = 'npm i @cramzzzberry/almost-material-plugin';

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  copyToClipboard(str: string) {
    this.clipboard.copy(str);
  }
}