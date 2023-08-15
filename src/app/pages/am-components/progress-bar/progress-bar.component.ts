import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  snippets = {
    'progress bar': {
      htmlCode: '<span class=\"progress\" style=\"--value: 5; --max: 10;\"></span>',
      jsxCode: '<span className=\"progress\" style={{-value: 5, -max: 10}} />',
    },
    'progress bar in different colors': {
      htmlCode: '<!-- default -->\n<span class=\"progress\" style=\"--value: 5; --max: 10;\"></span>\n\n<!-- primary -->\n<span class=\"progress progress-primary\" style=\"--value: 5; --max: 10;\"></span>\n\n<!-- secondary -->\n<span class=\"progress progress-secondary\" style=\"--value: 5; --max: 10;\"></span>\n\n<!-- tertiary -->\n<span class=\"progress progress-tertiary\" style=\"--value: 5; --max: 10;\"></span>\n\n<!-- info -->\n<span class=\"progress progress-info\" style=\"--value: 5; --max: 10;\"></span>\n\n<!-- warning -->\n<span class=\"progress progress-warning\" style=\"--value: 5; --max: 10;\"></span>\n\n<!-- success -->\n<span class=\"progress progress-success\" style=\"--value: 5; --max: 10;\"></span>\n\n<!-- error -->\n<span class=\"progress progress-error\" style=\"--value: 5; --max: 10;\"></span>',
      jsxCode: '{/* default */}\n<span className=\"progress\" style={{-value: 5, -max: 10}} />\n\n{/* primary */}\n<span className=\"progress progress-primary\" style={{-value: 5, -max: 10}} />\n\n{/* secondary */}\n<span className=\"progress progress-secondary\" style={{-value: 5, -max: 10}} />\n\n{/* tertiary */}\n<span className=\"progress progress-tertiary\" style={{-value: 5, -max: 10}} />\n\n{/* info */}\n<span className=\"progress progress-info\" style={{-value: 5, -max: 10}} />\n\n{/* warning */}\n<span className=\"progress progress-warning\" style={{-value: 5, -max: 10}} />\n\n{/* success */}\n<span className=\"progress progress-success\" style={{-value: 5, -max: 10}} />\n\n{/* error */}\n<span className=\"progress progress-error\" style={{-value: 5, -max: 10}} />',
    },
    'progress bar in different sizes': {
      htmlCode: '<!-- small -->\n<span class=\"progress progress-sm\" style=\"--value: 5; --max: 10;\"></span>\n\n<!-- default -->\n<span class=\"progress progress-md\" style=\"--value: 5; --max: 10;\"></span>\n\n<!-- large -->\n<span class=\"progress progress-lg\" style=\"--value: 5; --max: 10;\"></span>\n\n<!-- xl -->\n<span class=\"progress progress-xl\" style=\"--value: 5; --max: 10;\"></span>',
      jsxCode: '{/* small */}\n<span className=\"progress progress-sm\" style={{-value: 5, -max: 10}} />\n\n{/* default */}\n<span className=\"progress progress-md\" style={{-value: 5, -max: 10}} />\n\n{/* large */}\n<span className=\"progress progress-lg\" style={{-value: 5, -max: 10}} />\n\n{/* xl */}\n<span className=\"progress progress-xl\" style={{-value: 5, -max: 10}} />',
    },
  }
}
