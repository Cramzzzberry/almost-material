import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  snippets = {
    'slider': {
      htmlCode: '<input type=\"range\" class=\"slider w-72\">',
      jsxCode: '<input type=\"range\" className=\"slider w-72\" />',
    },
    'slider with colors': {
      htmlCode: '<!-- default -->\n<input type=\"range\" class=\"slider w-72\">\n\n<!-- primary -->\n<input type=\"range\" class=\"slider slider-primary w-72\">\n\n<!-- secondary -->\n<input type=\"range\" class=\"slider slider-secondary w-72\">\n\n<!-- tertiary -->\n<input type=\"range\" class=\"slider slider-tertiary w-72\">\n\n<!-- info -->\n<input type=\"range\" class=\"slider slider-info w-72\">\n\n<!-- warning -->\n<input type=\"range\" class=\"slider slider-warning w-72\">\n\n<!-- success -->\n<input type=\"range\" class=\"slider slider-success w-72\">\n\n<!-- error -->\n<input type=\"range\" class=\"slider slider-error w-72\">',
      jsxCode: '{/* default */}\n<input type=\"range\" className=\"slider w-72\" />\n\n{/* primary */}\n<input type=\"range\" className=\"slider slider-primary w-72\" />\n\n{/* secondary */}\n<input type=\"range\" className=\"slider slider-secondary w-72\" />\n\n{/* tertiary */}\n<input type=\"range\" className=\"slider slider-tertiary w-72\" />\n\n{/* info */}\n<input type=\"range\" className=\"slider slider-info w-72\" />\n\n{/* warning */}\n<input type=\"range\" className=\"slider slider-warning w-72\" />\n\n{/* success */}\n<input type=\"range\" className=\"slider slider-success w-72\" />\n\n{/* error */}\n<input type=\"range\" className=\"slider slider-error w-72\" />',
    },
  };
}
