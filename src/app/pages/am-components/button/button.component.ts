import { Component } from '@angular/core';
import { ScrollToService } from '../../../services/scroll-to.service'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  constructor(private scrollToService: ScrollToService) {}
  stService = this.scrollToService;

  snippets = {
    'button': {
      htmlCode: '<button class=\"btn\">button</button>',
      jsxCode: '<button className=\"btn\">button</button>',
    },
    'button with icon': {
      htmlCode: '<button class=\"btn\">\n  <span class=\"material-icons-round\">\n    search\n  </span>\n  button\n</button>',
      jsxCode: '<button classname=\"btn\">\n  <span classname=\"material-icons-round\">search</span>\n  button\n</button>',
    },
    'outlined button': {
      htmlCode: '<button class=\"btn btn-outline\">outlined</button>',
      jsxCode: '<button className=\"btn btn-outline\">outlined</button>',
    },
    'ghost button': {
      htmlCode: '<button class=\"btn btn-ghost\">ghost</button>',
      jsxCode: '<button className=\"btn btn-ghost\">ghost</button>',
    },
    'circle button': {
      htmlCode: '<button class=\"btn btn-circle\">\n  <span class=\"material-icons-round\">\n    search\n  </span>\n</button>\n<button class=\"btn btn-circle btn-outline\">\n  <span class=\"material-icons-round\">\n    search\n  </span>\n</button>\n<button class=\"btn btn-circle btn-ghost\">\n  <span class=\"material-icons-round\">\n    search\n  </span>\n</button>',
      jsxCode: '<button className=\"btn btn-circle\">\n  <span className=\"material-icons-round\">\n    search\n  </span>\n</button>\n<button className=\"btn btn-circle btn-outline\">\n  <span className=\"material-icons-round\">\n    search\n  </span>\n</button>\n<button className=\"btn btn-circle btn-ghost\">\n  <span className=\"material-icons-round\">\n    search\n  </span>\n</button>',
    },
    'button with colors': {
      htmlCode: '<!-- default -->\n<button class=\"btn\">default</button>\n\n<!-- primary -->\n<button class=\"btn btn-primary\">primary</button>\n\n<!-- secondary -->\n<button class=\"btn btn-secondary\">secondary</button>\n\n<!-- tertiary -->\n<button class=\"btn btn-tertiary\">tertiary</button>\n\n<!-- info -->\n<button class=\"btn btn-info\">info</button>\n\n<!-- warning -->\n<button class=\"btn btn-warning\">warning</button>\n\n<!-- success -->\n<button class=\"btn btn-success\">success</button>\n\n<!-- error -->\n<button class=\"btn btn-error\">error</button>',
      jsxCode: '{/* default */}\n<button className=\"btn\">default</button>\n\n{/* primary */}\n<button className=\"btn btn-primary\">primary</button>\n\n{/* secondary */}\n<button className=\"btn btn-secondary\">secondary</button>\n\n{/* tertiary */}\n<button className=\"btn btn-tertiary\">tertiary</button>\n\n{/* info */}\n<button className=\"btn btn-info\">info</button>\n\n{/* warning */}\n<button className=\"btn btn-warning\">warning</button>\n\n{/* success */}\n<button className=\"btn btn-success\">success</button>\n\n{/* error */}\n<button className=\"btn btn-error\">error</button>',
    },
    'active buttons': {
      htmlCode: '<!-- default -->\n<button class=\"btn btn-active\">default</button>\n\n<!-- primary -->\n<button class=\"btn btn-primary btn-active\">primary</button>\n\n<!-- secondary -->\n<button class=\"btn btn-secondary btn-active\">secondary</button>\n\n<!-- tertiary -->\n<button class=\"btn btn-tertiary btn-active\">tertiary</button>\n\n<!-- info -->\n<button class=\"btn btn-info btn-active\">info</button>\n\n<!-- warning -->\n<button class=\"btn btn-warning btn-active\">warning</button>\n\n<!-- success -->\n<button class=\"btn btn-success btn-active\">success</button>\n\n<!-- error -->\n<button class=\"btn btn-error btn-active\">error</button>',
      jsxCode: '{/* default */}\n<button className=\"btn btn-active\">default</button>\n\n{/* primary */}\n<button className=\"btn btn-primary btn-active\">primary</button>\n\n{/* secondary */}\n<button className=\"btn btn-secondary btn-active\">secondary</button>\n\n{/* tertiary */}\n<button className=\"btn btn-tertiary btn-active\">tertiary</button>\n\n{/* info */}\n<button className=\"btn btn-info btn-active\">info</button>\n\n{/* warning */}\n<button className=\"btn btn-warning btn-active\">warning</button>\n\n{/* success */}\n<button className=\"btn btn-success btn-active\">success</button>\n\n{/* error */}\n<button className=\"btn btn-error btn-active\">error</button>',
    },
    'different button sizes': {
      htmlCode: '<!-- small -->\n<button class=\"btn btn-sm\">small</button>\n\n<!-- default -->\n<button class=\"btn btn-md\">default</button>\n\n<!-- large -->\n<button class=\"btn btn-lg\">large</button>\n\n<!-- xl -->\n<button class=\"btn btn-xl\">RAWR</button>',
      jsxCode: '{/* small */}\n<button className=\"btn btn-sm\">small</button>\n\n{/* default */}\n<button className=\"btn btn-md\">default</button>\n\n{/* large */}\n<button className=\"btn btn-lg\">large</button>\n\n{/* xl */}\n<button className=\"btn btn-xl\">RAWR</button>',
    },
    'disabled button': {
      htmlCode: '<button class=\"btn\" disabled=\"disabled\">disabled</button>',
      jsxCode: '<button className=\"btn\" disabled=\"disabled\">disabled</button>',
    },
  };
}
