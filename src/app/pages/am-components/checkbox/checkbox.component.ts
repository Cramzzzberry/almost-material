import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  snippets = {
    'checkbox': {
      htmlCode: '<input type=\"checkbox\" checked class=\"check\" />',
      jsxCode: '<input type=\"checkbox\" defaultChecked className=\"check\" />',
    },
    'checkbox with colors': {
      htmlCode: '<!-- default -->\n<input type=\"checkbox\" checked class=\"check\" />\n\n<!-- primary -->\n<input type=\"checkbox\" checked class=\"check check-primary\" />\n\n<!-- secondary -->\n<input type=\"checkbox\" checked class=\"check check-secondary\" />\n\n<!-- tertiary -->\n<input type=\"checkbox\" checked class=\"check check-tertiary\" />\n\n<!-- info -->\n<input type=\"checkbox\" checked class=\"check check-info\" />\n\n<!-- warning -->\n<input type=\"checkbox\" checked class=\"check check-warning\" />\n\n<!-- success -->\n<input type=\"checkbox\" checked class=\"check check-success\" />\n\n<!-- error -->\n<input type=\"checkbox\" checked class=\"check check-error\" />',
      jsxCode: '{/* default */}\n<input type=\"checkbox\" defaultChecked className=\"check\" />\n\n{/* primary */}\n<input type=\"checkbox\" defaultChecked className=\"check check-primary\" />\n\n{/* secondary */}\n<input type=\"checkbox\" defaultChecked className=\"check check-secondary\" />\n\n{/* tertiary */}\n<input type=\"checkbox\" defaultChecked className=\"check check-tertiary\" />\n\n{/* info */}\n<input type=\"checkbox\" defaultChecked className=\"check check-info\" />\n\n{/* warning */}\n<input type=\"checkbox\" defaultChecked className=\"check check-warning\" />\n\n{/* success */}\n<input type=\"checkbox\" defaultChecked className=\"check check-success\" />\n\n{/* error */}\n<input type=\"checkbox\" defaultChecked className=\"check check-error\" />',
    },
    'checkbox with different sizes': {
      htmlCode: '<!-- small -->\n<input type=\"checkbox\" checked class=\"check check-sm\" />\n\n<!-- default -->\n<input type=\"checkbox\" checked class=\"check check-md\" />\n\n<!-- large -->\n<input type=\"checkbox\" checked class=\"check check-lg\" />\n\n<!-- xl -->\n<input type=\"checkbox\" checked class=\"check check-xl\" />',
      jsxCode: '{/* small */}\n<input type=\"checkbox\" defaultChecked className=\"check check-sm\" />\n\n{/* default */}\n<input type=\"checkbox\" defaultChecked className=\"check check-md\" />\n\n{/* large */}\n<input type=\"checkbox\" defaultChecked className=\"check check-lg\" />\n\n{/* xl */}\n<input type=\"checkbox\" defaultChecked className=\"check check-xl\" />',
    },
    'disabled checkbox': {
      htmlCode: '<input type=\"checkbox\" disabled class=\"check\" />\n<input type=\"checkbox\" disabled checked class=\"check\" />',
      jsxCode: '<input type=\"checkbox\" disabled className=\"check\" />\n<input type=\"checkbox\" disabled defaultChecked className=\"check\" />',
    },
    'indeterminate checkbox': {
      htmlCode: '<script>\n  document.getElementById(\"myCheckbox\").indeterminate = true;\n</script>\n\n<input type=\"checkbox\" id=\"myCheckbox\" class=\"check\" />',
      jsxCode: '<script>\n  document.getElementById(\"myCheckbox\").indeterminate = true;\n</script>\n\n<input type=\"checkbox\" id=\"myCheckbox\" className=\"check\" />',
    },
  }
}
