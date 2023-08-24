import { Component, AfterViewChecked } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements AfterViewChecked {
  constructor(private highlightService: HighlightService, private clipboard: Clipboard) {}

  overridePaletteSnippet = 'const plugin = require(\'@cramzzzberry/almost-material-plugin\')\n\nconst myPalette = {\n  primary: \"#4fc1e9\",\n   \n  secondary: \"#ec87c0\",\n      \n  tertiary: \"#ac92ec\",\n      \n  info: \"#5d9cec\",\n      \n  warning: \"#ffce54\",\n      \n  success: \"#a0d468\",\n      \n  error: \"#ed5565\",\n}\n\nmodule.exports = {\n  theme: {\n    almostMaterial: myPalette,\n  },\n  plugins: [plugin.almostMaterial],\n}';
  extendPaletteSnippet = 'const plugin = require(\'@cramzzzberry/almost-material-plugin\')\n\nconst myPalette = {\n  primary: \"#4fc1e9\",\n   \n  secondary: \"#ec87c0\",\n      \n  tertiary: \"#ac92ec\",\n      \n  info: \"#5d9cec\",\n      \n  warning: \"#ffce54\",\n      \n  success: \"#a0d468\",\n      \n  error: \"#ed5565\",\n}\n\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: plugin.CreateShades(myPalette)\n    },\n    almostMaterial: myPalette,\n  },\n  plugins: [plugin.almostMaterial],\n}';

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  copyToClipboard(str: string) {
    this.clipboard.copy(str);
  }
}
