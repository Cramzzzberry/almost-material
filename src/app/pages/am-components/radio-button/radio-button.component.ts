import { Component } from '@angular/core';
import { ScrollToService } from '../../../services/scroll-to.service'

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent {
  constructor(private scrollToService: ScrollToService) {}
  stService = this.scrollToService;

  snippets= {
    'radio button': {
      htmlCode: '<input type=\"radio\" name=\"radio\" class=\"radio\">\n<input type=\"radio\" name=\"radio\" checked class=\"radio\">',
      jsxCode: '<input type=\"radio\" name=\"radio\" className=\"radio\" />\n<input type=\"radio\" name=\"radio\" defaultChecked className=\"radio\" />',
    },
    'radio button in different colors': {
      htmlCode: '<!-- default -->\n<input type=\"radio\" name=\"default\" class=\"radio\">\n<input type=\"radio\" name=\"default\" checked class=\"radio\">\n\n<!-- primary -->\n<input type=\"radio\" name=\"primary\" class=\"radio radio-primary\">\n<input type=\"radio\" name=\"primary\" checked class=\"radio radio-primary\">\n\n<!-- secondary -->\n<input type=\"radio\" name=\"secondary\" class=\"radio radio-secondary\">\n<input type=\"radio\" name=\"secondary\" checked class=\"radio radio-secondary\">\n\n<!-- tertiary -->\n<input type=\"radio\" name=\"tertiary\" class=\"radio radio-tertiary\">\n<input type=\"radio\" name=\"tertiary\" checked class=\"radio radio-tertiary\">\n\n<!-- info -->\n<input type=\"radio\" name=\"info\" class=\"radio radio-info\">\n<input type=\"radio\" name=\"info\" checked class=\"radio radio-info\">\n\n<!-- warning -->\n<input type=\"radio\" name=\"warning\" class=\"radio radio-warning\">\n<input type=\"radio\" name=\"warning\" checked class=\"radio radio-warning\">\n\n<!-- success -->\n<input type=\"radio\" name=\"success\" class=\"radio radio-success\">\n<input type=\"radio\" name=\"success\" checked class=\"radio radio-success\">\n\n<!-- error -->\n<input type=\"radio\" name=\"error\" class=\"radio radio-error\">\n<input type=\"radio\" name=\"error\" checked class=\"radio radio-error\">',
      jsxCode: '{/* default */}\n<input type=\"radio\" name=\"default\" className=\"radio\" />\n<input type=\"radio\" name=\"default\" defaultChecked className=\"radio\" />\n\n{/* primary */}\n<input type=\"radio\" name=\"primary\" className=\"radio radio-primary\" />\n<input type=\"radio\" name=\"primary\" defaultChecked className=\"radio radio-primary\" />\n\n{/* secondary */}\n<input type=\"radio\" name=\"secondary\" className=\"radio radio-secondary\" />\n<input type=\"radio\" name=\"secondary\" defaultChecked className=\"radio radio-secondary\" />\n\n{/* tertiary */}\n<input type=\"radio\" name=\"tertiary\" className=\"radio radio-tertiary\" />\n<input type=\"radio\" name=\"tertiary\" defaultChecked className=\"radio radio-tertiary\" />\n\n{/* info */}\n<input type=\"radio\" name=\"info\" className=\"radio radio-info\" />\n<input type=\"radio\" name=\"info\" defaultChecked className=\"radio radio-info\" />\n\n{/* warning */}\n<input type=\"radio\" name=\"warning\" className=\"radio radio-warning\" />\n<input type=\"radio\" name=\"warning\" defaultChecked className=\"radio radio-warning\" />\n\n{/* success */}\n<input type=\"radio\" name=\"success\" className=\"radio radio-success\" />\n<input type=\"radio\" name=\"success\" defaultChecked className=\"radio radio-success\" />\n\n{/* error */}\n<input type=\"radio\" name=\"error\" className=\"radio radio-error\" />\n<input type=\"radio\" name=\"error\" defaultChecked className=\"radio radio-error\" />',
    },
    'radio button in different sizes': {
      htmlCode: '<!-- small -->\n<input type=\"radio\" name=\"sm\" class=\"radio radio-sm\">\n<input type=\"radio\" name=\"sm\" checked class=\"radio radio-sm\">\n\n<!-- default -->\n<input type=\"radio\" name=\"md\" class=\"radio radio-md\">\n<input type=\"radio\" name=\"md\" checked class=\"radio radio-md\">\n\n<!-- large -->\n<input type=\"radio\" name=\"lg\" class=\"radio radio-lg\">\n<input type=\"radio\" name=\"lg\" checked class=\"radio radio-lg\">\n\n<!-- xl -->\n<input type=\"radio\" name=\"xl\" class=\"radio radio-xl\">\n<input type=\"radio\" name=\"xl\" checked class=\"radio radio-xl\">',
      jsxCode: '{/* small */}\n<input type=\"radio\" name=\"sm\" className=\"radio radio-sm\" />\n<input type=\"radio\" name=\"sm\" defaultChecked className=\"radio radio-sm\" />\n\n{/* default */}\n<input type=\"radio\" name=\"md\" className=\"radio radio-md\" />\n<input type=\"radio\" name=\"md\" defaultChecked className=\"radio radio-md\" />\n\n{/* large */}\n<input type=\"radio\" name=\"lg\" className=\"radio radio-lg\" />\n<input type=\"radio\" name=\"lg\" defaultChecked className=\"radio radio-lg\" />\n\n{/* xl */}\n<input type=\"radio\" name=\"xl\" className=\"radio radio-xl\" />\n<input type=\"radio\" name=\"xl\" defaultChecked className=\"radio radio-xl\" />',
    },
    'disabled radio button': {
      htmlCode: '<input type=\"radio\" name=\"disabled\" disabled class=\"radio\">\n<input type=\"radio\" name=\"disabled\" checked disabled class=\"radio\">',
      jsxCode: '<input type=\"radio\" name=\"disabled\" disabled className=\"radio\" />\n<input type=\"radio\" name=\"disabled\" defaultChecked disabled className=\"radio\" />',
    },
  }
}
