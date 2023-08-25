import { Component, AfterViewChecked } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { ScrollToService } from '../../services/scroll-to.service'

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements AfterViewChecked {
  constructor(private highlightService: HighlightService, private clipboard: Clipboard, private scrollToService: ScrollToService) {}
  stService = this.scrollToService;

  overridePaletteSnippet = 'const plugin = require(\'@cramzzzberry/almost-material-plugin\')\n\nconst myPalette = {\n  primary: \"#4fc1e9\",\n   \n  secondary: \"#ec87c0\",\n      \n  tertiary: \"#ac92ec\",\n      \n  info: \"#5d9cec\",\n      \n  warning: \"#ffce54\",\n      \n  success: \"#a0d468\",\n      \n  error: \"#ed5565\",\n}\n\nmodule.exports = {\n  theme: {\n    almostMaterial: myPalette,\n  },\n  plugins: [plugin.almostMaterial],\n}';
  extendPaletteSnippet = 'const plugin = require(\'@cramzzzberry/almost-material-plugin\')\n\nconst myPalette = {\n  primary: \"#4fc1e9\",\n   \n  secondary: \"#ec87c0\",\n      \n  tertiary: \"#ac92ec\",\n      \n  info: \"#5d9cec\",\n      \n  warning: \"#ffce54\",\n      \n  success: \"#a0d468\",\n      \n  error: \"#ed5565\",\n}\n\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: plugin.CreateShades(myPalette)\n    },\n    almostMaterial: myPalette,\n  },\n  plugins: [plugin.almostMaterial],\n}';
  htmlSnippet = '<!DOCTYPE html>\n<html data-color=\"primary\" lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Document</title>\n</head>\n<body>\n  <!-- content here -->\n</body>\n</html>';

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  copyToClipboard(str: string) {
    this.clipboard.copy(str);
  }
}
