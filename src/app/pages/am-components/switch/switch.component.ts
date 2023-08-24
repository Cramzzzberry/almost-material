import { Component } from '@angular/core';
import { ScrollToService } from '../../../services/scroll-to.service'

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
  constructor(private scrollToService: ScrollToService) {}
  stService = this.scrollToService;

  snippets = {
    'switch': {
      htmlCode: '<input type=\"checkbox\" checked class=\"switch\">',
      jsxCode: '<input type="checkbox" defaultChecked className="switch" />',
    },
    'switch with colors': {
      htmlCode: '<!-- default -->\n<input type=\"checkbox\" checked class=\"switch\">\n\n<!-- primary -->\n<input type=\"checkbox\" checked class=\"switch switch-primary\">\n\n<!-- secondary -->\n<input type=\"checkbox\" checked class=\"switch switch-secondary\">\n\n<!-- tertiary -->\n<input type=\"checkbox\" checked class=\"switch switch-tertiary\">\n\n<!-- info -->\n<input type=\"checkbox\" checked class=\"switch switch-info\">\n\n<!-- warning -->\n<input type=\"checkbox\" checked class=\"switch switch-warning\">\n\n<!-- success -->\n<input type=\"checkbox\" checked class=\"switch switch-success\">\n\n<!-- error -->\n<input type=\"checkbox\" checked class=\"switch switch-error\">',
      jsxCode: '{/* default */}\n<input type=\"checkbox\" defaultChecked className=\"switch\" />\n\n{/* primary */}\n<input type=\"checkbox\" defaultChecked className=\"switch switch-primary\" />\n\n{/* secondary */}\n<input type=\"checkbox\" defaultChecked className=\"switch switch-secondary\" />\n\n{/* tertiary */}\n<input type=\"checkbox\" defaultChecked className=\"switch switch-tertiary\" />\n\n{/* info */}\n<input type=\"checkbox\" defaultChecked className=\"switch switch-info\" />\n\n{/* warning */}\n<input type=\"checkbox\" defaultChecked className=\"switch switch-warning\" />\n\n{/* success */}\n<input type=\"checkbox\" defaultChecked className=\"switch switch-success\" />\n\n{/* error */}\n<input type=\"checkbox\" defaultChecked className=\"switch switch-error\" />',
    },
    'switch in different sizes': {
      htmlCode: '<!-- small -->\n<input type=\"checkbox\" checked class=\"switch switch-sm\">\n\n<!-- default -->\n<input type=\"checkbox\" checked class=\"switch switch-md\">\n\n<!-- large -->\n<input type=\"checkbox\" checked class=\"switch switch-lg\">\n\n<!-- xl -->\n<input type=\"checkbox\" checked class=\"switch switch-xl\">',
      jsxCode: '{/* small */}\n<input type=\"checkbox\" defaultChecked className=\"switch switch-sm\" />\n\n{/* default */}\n<input type=\"checkbox\" defaultChecked className=\"switch switch-md\" />\n\n{/* large */}\n<input type=\"checkbox\" defaultChecked className=\"switch switch-lg\" />\n\n{/* xl */}\n<input type=\"checkbox\" defaultChecked className=\"switch switch-xl\" />',
    },
    'disabled switch': {
      htmlCode: '<input type=\"checkbox\" disabled class=\"switch\">\n<input type=\"checkbox\" checked disabled class=\"switch\">',
      jsxCode: '<input type=\"checkbox\" disabled className=\"switch\" />\n<input type=\"checkbox\" defaultChecked disabled className=\"switch\" />',
    },
    'indeterminate switch': {
      htmlCode: '<script>\n  document.getElementById(\"mySwitch\").indeterminate = true;\n</script>\n\n<input type=\"checkbox\" id=\"mySwitch\" class=\"switch\">',
      jsxCode: '<script>\n  document.getElementById(\"mySwitch\").indeterminate = true;\n</script>\n\n<input type=\"checkbox\" id=\"mySwitch\" className=\"switch\" />',
    },
  }
}
