import { Component } from '@angular/core';
import { ScrollToService } from '../../../services/scroll-to.service'

@Component({
  selector: 'app-navigation-rail',
  templateUrl: './navigation-rail.component.html',
  styleUrls: ['./navigation-rail.component.css']
})
export class NavigationRailComponent {
  constructor(private scrollToService: ScrollToService) {}
  stService = this.scrollToService;

  snippets = {
    'rail': {
      htmlCode: '<div class=\"rail\">\n  <div class=\"rail-middle\">\n    <ul class=\"menu\">\n      <li>\n        <a class=\"menu-active\">\n          <span class=\"material-icons-round\">hexagon</span>\n        </a>\n      </li>\n      <li>\n        <a>\n          <span class=\"material-icons-round\">hexagon</span>\n        </a>\n      </li>\n      <li>\n        <a>\n          <span class=\"material-icons-round\">hexagon</span>\n        </a>\n      </li>\n      <li>\n        <a>\n          <span class=\"material-icons-round\">hexagon</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>',
      jsxCode: '<div className=\"rail\">\n  <div className=\"rail-middle\">\n    <ul className=\"menu\">\n      <li>\n        <a className=\"menu-active\">\n          <span className=\"material-icons-round\">hexagon</span>\n        </a>\n      </li>\n      <li>\n        <a>\n          <span className=\"material-icons-round\">hexagon</span>\n        </a>\n      </li>\n      <li>\n        <a>\n          <span className=\"material-icons-round\">hexagon</span>\n        </a>\n      </li>\n      <li>\n        <a>\n          <span className=\"material-icons-round\">hexagon</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>',
    },
    'rail with open toggle': {
      htmlCode: '<input type=\"checkbox\" id=\"myRail\" class=\"rail-toggle\">\n<div class=\"rail h-[24rem]\">\n  <!-- rail top -->\n  <div class=\"rail-top\">\n    <ul class=\"menu\">\n      <li>\n        <label for=\"myRail\">\n          <span class=\"material-icons-round\">menu</span>\n          menu\n        </label>\n      </li>\n    </ul>\n  </div>\n\n  <!-- rail middle -->\n  <div class=\"rail-middle\">\n    <ul class=\"menu\">\n      <li>\n        <a class=\"menu-active\">\n          <span class=\"material-icons-round\">hexagon</span>\n          label\n        </a>\n      </li>\n      <li>\n        <a>\n          <span class=\"material-icons-round\">hexagon</span>\n          label\n        </a>\n      </li>\n      <li>\n        <a>\n          <span class=\"material-icons-round\">hexagon</span>\n          label\n        </a>\n      </li>\n    </ul>\n  </div>\n\n  <!-- rail bottom -->\n  <div class=\"rail-bottom\">\n    <ul class=\"menu menu-rail\">\n      <li>\n        <a>\n          <span class=\"material-icons-round\">logout</span>\n          logout\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>',
      jsxCode: '<input type=\"checkbox\" id=\"myRail\" className=\"rail-toggle\" />\n<div className=\"rail h-[24rem]\">\n  {/* rail top */}\n  <div className=\"rail-top\">\n    <ul className=\"menu\">\n      <li>\n        <label htmlFor=\"myRail\">\n          <span className=\"material-icons-round\">menu</span>\n          menu\n        </label>\n      </li>\n    </ul>\n  </div>\n  \n  {/* rail middle */}\n  <div className=\"rail-middle\">\n    <ul className=\"menu\">\n      <li>\n        <a className=\"menu-active\">\n          <span className=\"material-icons-round\">hexagon</span>\n          label\n        </a>\n      </li>\n      <li>\n        <a>\n          <span className=\"material-icons-round\">hexagon</span>\n          label\n        </a>\n      </li>\n      <li>\n        <a>\n          <span className=\"material-icons-round\">hexagon</span>\n          label\n        </a>\n      </li>\n    </ul>\n  </div>\n  \n  {/* rail bottom */}\n  <div className=\"rail-bottom\">\n    <ul className=\"menu menu-rail\">\n      <li>\n        <a>\n          <span className=\"material-icons-round\">logout</span>\n          logout\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>',
    },
  }
}
