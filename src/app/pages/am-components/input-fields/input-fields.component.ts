import { Component } from '@angular/core';

@Component({
  selector: 'app-input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.css']
})
export class InputFieldsComponent {
  snippets = {
    'text fields': {
      htmlCode: '<div class=\"input input-text\">\n  <input placeholder=\" \" type=\"text\">\n  <label class=\"input-placeholder\">Text</label>\n</div>\n<div class=\"input input-text\">\n  <input placeholder=\" \" type=\"number\">\n  <label class=\"input-placeholder\">Number</label>\n</div>\n<div class=\"input input-text\">\n  <input placeholder=\" \" type=\"password\">\n  <label class=\"input-placeholder\">Password</label>\n</div>',
      jsxCode: '<div className=\"input input-text\">\n  <input placeholder=\" \" type=\"text\" />\n  <label className=\"input-placeholder\">Text</label>\n</div>\n<div className=\"input input-text\">\n  <input placeholder=\" \" type=\"number\" />\n  <label className=\"input-placeholder\">Number</label>\n</div>\n<div className=\"input input-text\">\n  <input placeholder=\" \" type=\"password\" />\n  <label className=\"input-placeholder\">Password</label>\n</div>',
    },
    'text fields with colors': {
      htmlCode: '<!-- default -->\n<div class=\"input input-text\">\n  <input placeholder=\" \" type=\"text\">\n  <label class=\"input-placeholder\">Default</label>\n</div>\n\n<!-- primary -->\n<div class=\"input input-text input-primary\">\n  <input placeholder=\" \" type=\"text\">\n  <label class=\"input-placeholder\">Primary</label>\n</div>\n\n<!-- secondary -->\n<div class=\"input input-text input-secondary\">\n  <input placeholder=\" \" type=\"text\">\n  <label class=\"input-placeholder\">Secondary</label>\n</div>\n\n<!-- teriary -->\n<div class=\"input input-text input-tertiary\">\n  <input placeholder=\" \" type=\"text\">\n  <label class=\"input-placeholder\">Tertiary</label>\n</div>\n\n<!-- info -->\n<div class=\"input input-text input-info\">\n  <input placeholder=\" \" type=\"text\">\n  <label class=\"input-placeholder\">Info</label>\n</div>\n\n<!-- warning -->\n<div class=\"input input-text input-warning\">\n  <input placeholder=\" \" type=\"text\">\n  <label class=\"input-placeholder\">Warning</label>\n</div>\n\n<!-- success -->\n<div class=\"input input-text input-success\">\n  <input placeholder=\" \" type=\"text\">\n  <label class=\"input-placeholder\">Success</label>\n</div>\n\n<!-- error -->\n<div class=\"input input-text input-error\">\n  <input placeholder=\" \" type=\"text\">\n  <label class=\"input-placeholder\">Error</label>\n</div>',
      jsxCode: '{/* default */}\n<div className=\"input input-text\">\n  <input placeholder=\" \" type=\"text\" />\n  <label className=\"input-placeholder\">Default</label>\n</div>\n\n{/* primary */}\n<div className=\"input input-text input-primary\">\n  <input placeholder=\" \" type=\"text\" />\n  <label className=\"input-placeholder\">Primary</label>\n</div>\n\n{/* secondary */}\n<div className=\"input input-text input-secondary\">\n  <input placeholder=\" \" type=\"text\" />\n  <label className=\"input-placeholder\">Secondary</label>\n</div>\n\n{/* teriary */}\n<div className=\"input input-text input-tertiary\">\n  <input placeholder=\" \" type=\"text\" />\n  <label className=\"input-placeholder\">Tertiary</label>\n</div>\n\n{/* info */}\n<div className=\"input input-text input-info\">\n  <input placeholder=\" \" type=\"text\" />\n  <label className=\"input-placeholder\">Info</label>\n</div>\n\n{/* warning */}\n<div className=\"input input-text input-warning\">\n  <input placeholder=\" \" type=\"text\" />\n  <label className=\"input-placeholder\">Warning</label>\n</div>\n\n{/* success */}\n<div className=\"input input-text input-success\">\n  <input placeholder=\" \" type=\"text\" />\n  <label className=\"input-placeholder\">Success</label>\n</div>\n\n{/* error */}\n<div className=\"input input-text input-error\">\n  <input placeholder=\" \" type=\"text\" />\n  <label className=\"input-placeholder\">Error</label>\n</div>',
    },
    'disabled text field': {
      htmlCode: '<div class=\"input input-text\">\n  <input placeholder=\" \" type=\"text\" disabled=\"disabled\">\n  <label class=\"input-placeholder\">Text</label>\n</div>',
      jsxCode: '<div className=\"input input-text\">\n  <input placeholder=\" \" type=\"text\" disabled=\"disabled\" />\n  <label className=\"input-placeholder\">Text</label>\n</div>',
    },
    'date and time field': {
      htmlCode: '<input type=\"date\" class=\"input\">\n<input type=\"time\" class=\"input\">',
      jsxCode: '<input type=\"date\" className=\"input\" />\n<input type=\"time\" className=\"input\" />',
    },
    'date field with colors': {
      htmlCode: '<!-- default -->\n<input type=\"date\" class=\"input\">\n\n<!-- primary -->\n<input type=\"date\" class=\"input input-primary\">\n\n<!-- secondary -->\n<input type=\"date\" class=\"input input-secondary\">\n\n<!-- tertiary -->\n<input type=\"date\" class=\"input input-tertiary\">\n\n<!-- info -->\n<input type=\"date\" class=\"input input-info\">\n\n<!-- warning -->\n<input type=\"date\" class=\"input input-warning\">\n\n<!-- success -->\n<input type=\"date\" class=\"input input-success\">\n\n<!-- error -->\n<input type=\"date\" class=\"input input-error\">',
      jsxCode: '{/* default */}\n<input type=\"date\" className=\"input\" />\n\n{/* primary */}\n<input type=\"date\" className=\"input input-primary\" />\n\n{/* secondary */}\n<input type=\"date\" className=\"input input-secondary\" />\n\n{/* tertiary */}\n<input type=\"date\" className=\"input input-tertiary\" />\n\n{/* info */}\n<input type=\"date\" className=\"input input-info\" />\n\n{/* warning */}\n<input type=\"date\" className=\"input input-warning\" />\n\n{/* success */}\n<input type=\"date\" className=\"input input-success\" />\n\n{/* error */}\n<input type=\"date\" className=\"input input-error\" />',
    },
    'time field with colors': {
      htmlCode: '<!-- default -->\n<input type=\"time\" class=\"input\">\n\n<!-- primary -->\n<input type=\"time\" class=\"input input-primary\">\n\n<!-- secondary -->\n<input type=\"time\" class=\"input input-secondary\">\n\n<!-- tertiary -->\n<input type=\"time\" class=\"input input-tertiary\">\n\n<!-- info -->\n<input type=\"time\" class=\"input input-info\">\n\n<!-- warning -->\n<input type=\"time\" class=\"input input-warning\">\n\n<!-- success -->\n<input type=\"time\" class=\"input input-success\">\n\n<!-- error -->\n<input type=\"time\" class=\"input input-error\">',
      jsxCode: '{/* default */}\n<input type=\"time\" className=\"input\" />\n\n{/* primary */}\n<input type=\"time\" className=\"input input-primary\" />\n\n{/* secondary */}\n<input type=\"time\" className=\"input input-secondary\" />\n\n{/* tertiary */}\n<input type=\"time\" className=\"input input-tertiary\" />\n\n{/* info */}\n<input type=\"time\" className=\"input input-info\" />\n\n{/* warning */}\n<input type=\"time\" className=\"input input-warning\" />\n\n{/* success */}\n<input type=\"time\" className=\"input input-success\" />\n\n{/* error */}\n<input type=\"time\" className=\"input input-error\" />',
    },
    'disabled date and time field': {
      htmlCode: '<input type=\"date\" disabled=\"disabled\" class=\"input\">\n<input type=\"time\" disabled=\"disabled\" class=\"input\">',
      jsxCode: '<input type=\"date\" disabled=\"disabled\" className=\"input\" />\n<input type=\"time\" disabled=\"disabled\" className=\"input\" />',
    },
  };
}
