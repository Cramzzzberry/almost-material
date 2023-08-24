import { Component } from '@angular/core';
import { ScrollToService } from '../../../services/scroll-to.service'

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {
  constructor(private scrollToService: ScrollToService) {}
  stService = this.scrollToService;

  snippets = {
    'badge': {
      htmlCode: '<span class=\"badge\">badge</span>',
      jsxCode: '<span className=\"badge\">badge</span>',
    },
    'outlined badge': {
      htmlCode: '<span class=\"badge badge-outline\">outlined</span>',
      jsxCode: '<span className=\"badge badge-outline\">outlined</span>',
    },
    'badge without text': {
      htmlCode: '<span class=\"badge\"></span>',
      jsxCode: '<span className=\"badge\" />',
    },
    'badge in different colors': {
      htmlCode: '<!-- default -->\n<span class=\"badge\">default</span>\n\n<!-- primary -->\n<span class=\"badge badge-primary\">primary</span>\n\n<!-- secondary -->\n<span class=\"badge badge-secondary\">secondary</span>\n\n<!-- tertiary -->\n<span class=\"badge badge-tertiary\">tertiary</span>\n\n<!-- info -->\n<span class=\"badge badge-info\">info</span>\n\n<!-- warning -->\n<span class=\"badge badge-warning\">warning</span>\n\n<!-- success -->\n<span class=\"badge badge-success\">success</span>\n\n<!-- error -->\n<span class=\"badge badge-error\">error</span>',
      jsxCode: '{/* default */}\n<span className=\"badge\">default</span>\n\n{/* primary */}\n<span className=\"badge badge-primary\">primary</span>\n\n{/* secondary */}\n<span className=\"badge badge-secondary\">secondary</span>\n\n{/* tertiary */}\n<span className=\"badge badge-tertiary\">tertiary</span>\n\n{/* info */}\n<span className=\"badge badge-info\">info</span>\n\n{/* warning */}\n<span className=\"badge badge-warning\">warning</span>\n\n{/* success */}\n<span className=\"badge badge-success\">success</span>\n\n{/* error */}\n<span className=\"badge badge-error\">error</span>',
    },
    'badge in different sizes': {
      htmlCode: '<!-- small -->\n<span class=\"badge badge-sm\">small</span>\n\n<!-- default -->\n<span class=\"badge badge-md\">default</span>\n\n<!-- large -->\n<span class=\"badge badge-lg\">large</span>\n\n<!-- xl -->\n<span class=\"badge badge-xl\">RAWR</span>',
      jsxCode: '{/* small */}\n<span className=\"badge badge-sm\">small</span>\n\n{/* default */}\n<span className=\"badge badge-md\">default</span>\n\n{/* large */}\n<span className=\"badge badge-lg\">large</span>\n\n{/* xl */}\n<span className=\"badge badge-xl\">RAWR</span>',
    },
  }
}
