import { Component } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent {
  snippets = {
    'divider': {
      htmlCode: '<div class=\"flex flex-col w-full\">\n  <div class=\"flex justify-center items-center h-[6rem] bg-primary\">Content 1</div>\n  <div class=\"divider\"></div>\n  <div class=\"flex justify-center items-center h-[6rem] bg-secondary\">Content 2</div>\n</div>',
      jsxCode: '<div className=\"flex flex-col w-full\">\n  <div className=\"flex justify-center items-center h-[6rem] bg-primary\">Content 1</div>\n  <div className=\"divider\" />\n  <div className=\"flex justify-center items-center h-[6rem] bg-secondary\">Content 2</div>\n</div>',
    },
    'divider horizontal': {
      htmlCode: '<div class=\"flex flex-row basis-full\">\n  <div class=\"flex justify-center items-center h-[6rem] w-full bg-primary\">Content 1</div>\n  <div class=\"divider divider-horizontal\"></div>\n  <div class=\"flex justify-center items-center h-[6rem] w-full bg-secondary\">Content 2</div>\n</div>',
      jsxCode: '<div className=\"flex flex-row basis-full\">\n  <div className=\"flex justify-center items-center h-[6rem] w-full bg-primary\">Content 1</div>\n  <div className=\"divider divider-horizontal\" />\n  <div className=\"flex justify-center items-center h-[6rem] w-full bg-secondary\">Content 2</div>\n</div>',
    },
    'divider in different colors': {
      htmlCode: '<!-- default -->\n<div class=\"divider\"></div>\n\n<!-- primary -->\n<div class=\"divider divider-primary\"></div>\n\n<!-- secondary -->\n<div class=\"divider divider-secondary\"></div>\n\n<!-- tertiary -->\n<div class=\"divider divider-tertiary\"></div>\n\n<!-- info -->\n<div class=\"divider divider-info\"></div>\n\n<!-- warning -->\n<div class=\"divider divider-warning\"></div>\n\n<!-- success -->\n<div class=\"divider divider-success\"></div>\n\n<!-- error -->\n<div class=\"divider divider-error\"></div>',
      jsxCode: '{/* default */}\n<div className=\"divider\" />\n\n{/* primary */}\n<div className=\"divider divider-primary\" />\n\n{/* secondary */}\n<div className=\"divider divider-secondary\" />\n\n{/* tertiary */}\n<div className=\"divider divider-tertiary\" />\n\n{/* info */}\n<div className=\"divider divider-info\" />\n\n{/* warning */}\n<div className=\"divider divider-warning\" />\n\n{/* success */}\n<div className=\"divider divider-success\" />\n\n{/* error */}\n<div className=\"divider divider-error\" />',
    },
  }
}
