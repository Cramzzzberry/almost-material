import { Component } from '@angular/core';
import { ScrollToService } from '../../../services/scroll-to.service'

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent {
  constructor(private scrollToService: ScrollToService) {}
  stService = this.scrollToService;

  snippets = {
    'indicator': {
      htmlCode: '<div class=\"indicator\">\n  <span class=\"indicator-item badge badge-error\">+999</span>\n  <button class=\"btn\">Messages</button>\n</div>',
      jsxCode: '<div className=\"indicator\">\n  <span className=\"indicator-item badge badge-error\">+999</span>\n  <button className=\"btn\">Messages</button>\n</div>',
    },
    'indicator on top left': {
      htmlCode: '<div class=\"indicator\">\n  <span class=\"indicator-item indicator-top indicator-start badge badge-error\">+999</span>\n  <button class=\"btn\">Messages</button>\n</div>',
      jsxCode: '<div className=\"indicator\">\n  <span className=\"indicator-item indicator-top indicator-start badge badge-error\">+999</span>\n  <button className=\"btn\">Messages</button>\n</div>',
    },
    'indicator on top center': {
      htmlCode: '<div class=\"indicator\">\n  <span class=\"indicator-item indicator-top indicator-center badge badge-error\">+999</span>\n  <button class=\"btn\">Messages</button>\n</div>',
      jsxCode: '<div className=\"indicator\">\n  <span className=\"indicator-item indicator-top indicator-center badge badge-error\">+999</span>\n  <button className=\"btn\">Messages</button>\n</div>',
    },
    'indicator on top right': {
      htmlCode: '<div class=\"indicator\">\n  <span class=\"indicator-item indicator-top indicator-end badge badge-error\">+999</span>\n  <button class=\"btn\">Messages</button>\n</div>',
      jsxCode: '<div className=\"indicator\">\n  <span className=\"indicator-item indicator-top indicator-end badge badge-error\">+999</span>\n  <button className=\"btn\">Messages</button>\n</div>',
    },
    'indicator on middle left': {
      htmlCode: '<div class=\"indicator\">\n  <span class=\"indicator-item indicator-middle indicator-start badge badge-error\">+999</span>\n  <button class=\"btn\">Messages</button>\n</div>',
      jsxCode: '<div className=\"indicator\">\n  <span className=\"indicator-item indicator-middle indicator-start badge badge-error\">+999</span>\n  <button className=\"btn\">Messages</button>\n</div>',
    },
    'indicator on middle center': {
      htmlCode: '<div class=\"indicator\">\n  <span class=\"indicator-item indicator-middle indicator-center badge badge-error\">+999</span>\n  <button class=\"btn\">Messages</button>\n</div>',
      jsxCode: '<div className=\"indicator\">\n  <span className=\"indicator-item indicator-middle indicator-center badge badge-error\">+999</span>\n  <button className=\"btn\">Messages</button>\n</div>',
    },
    'indicator on middle right': {
      htmlCode: '<div class=\"indicator\">\n  <span class=\"indicator-item indicator-middle indicator-end badge badge-error\">+999</span>\n  <button class=\"btn\">Messages</button>\n</div>',
      jsxCode: '<div className=\"indicator\">\n  <span className=\"indicator-item indicator-middle indicator-end badge badge-error\">+999</span>\n  <button className=\"btn\">Messages</button>\n</div>',
    },
    'indicator on bottom left': {
      htmlCode: '<div class=\"indicator\">\n  <span class=\"indicator-item indicator-bottom indicator-start badge badge-error\">+999</span>\n  <button class=\"btn\">Messages</button>\n</div>',
      jsxCode: '<div className=\"indicator\">\n  <span className=\"indicator-item indicator-bottom indicator-start badge badge-error\">+999</span>\n  <button className=\"btn\">Messages</button>\n</div>',
    },
    'indicator on bottom center': {
      htmlCode: '<div class=\"indicator\">\n  <span class=\"indicator-item indicator-bottom indicator-center badge badge-error\">+999</span>\n  <button class=\"btn\">Messages</button>\n</div>',
      jsxCode: '<div className=\"indicator\">\n  <span className=\"indicator-item indicator-bottom indicator-center badge badge-error\">+999</span>\n  <button className=\"btn\">Messages</button>\n</div>',
    },
    'indicator on bottom right': {
      htmlCode: '<div class=\"indicator\">\n  <span class=\"indicator-item indicator-bottom indicator-end badge badge-error\">+999</span>\n  <button class=\"btn\">Messages</button>\n</div>',
      jsxCode: '<div className=\"indicator\">\n  <span className=\"indicator-item indicator-bottom indicator-end badge badge-error\">+999</span>\n  <button className=\"btn\">Messages</button>\n</div>',
    },
  }
}
