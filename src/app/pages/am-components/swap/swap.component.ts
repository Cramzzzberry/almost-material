import { Component } from '@angular/core';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css']
})
export class SwapComponent {
  snippets = {
    'swap': {
      htmlCode: '<label class=\"swap\">\n  <input type=\"checkbox\" />\n  <span class=\"swap-off\">Click me</span>\n  <span class=\"swap-on\">Why</span>\n</label>',
      jsxCode: '<label className=\"swap\">\n  <input type=\"checkbox\" />\n  <span className=\"swap-off\">Click me</span>\n  <span className=\"swap-on\">Why</span>\n</label>',
    },
    'swap fade': {
      htmlCode: '<label class=\"swap swap-fade\">\n  <input type=\"checkbox\" />\n  <span class=\"swap-off\">Off</span>\n  <span class=\"swap-on\">On</span>\n</label>',
      jsxCode: '<label className=\"swap swap-fade\">\n  <input type=\"checkbox\" />\n  <span className=\"swap-off\">Off</span>\n  <span className=\"swap-on\">On</span>\n</label>',
    },
    'swap rotate': {
      htmlCode: '<label class=\"swap swap-rotate\">\n  <input type=\"checkbox\" />\n  <span class=\"swap-off\">\n    <span class=\"material-icons-round\">\n      light_mode\n    </span>\n  </span>\n  <span class=\"swap-on\">\n    <span class=\"material-icons-round\">\n      dark_mode\n    </span>\n  </span>\n</label>',
      jsxCode: '<label className=\"swap swap-rotate\">\n  <input type=\"checkbox\" />\n  <span className=\"swap-off\">\n    <span className=\"material-icons-round\">\n      light_mode\n    </span>\n  </span>\n  <span className=\"swap-on\">\n    <span className=\"material-icons-round\">\n      dark_mode\n    </span>\n  </span>\n</label>',
    },
  }
}
