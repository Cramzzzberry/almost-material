import { Component } from '@angular/core';
import { ScrollToService } from '../../../services/scroll-to.service'

@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.css']
})
export class NavigationDrawerComponent {
  constructor(private scrollToService: ScrollToService) {}
  stService = this.scrollToService;

  snippets = {
    'drawer': {
      htmlCode: '<div class=\"drawer h-fit\">\n  <input class=\"drawer-toggle\" type=\"checkbox\" id=\"sampleDrawer\"/>\n  <div class=\"drawer-page-content\">\n    <!-- page content here -->\n    <label for=\"sampleDrawer\" class=\"btn\">Drawer</label>\n  </div>\n\n  <div class=\"drawer-sidebar\">\n    <div class=\"drawer-sidebar-content\">\n      <!-- sidebar content here -->\n      <ul class=\"menu\">\n        <li><a href=\"#\">Item 1</a></li>\n        <li><a href=\"#\">Item 2</a></li>\n        <li><a href=\"#\">Item 3</a></li>\n      </ul>\n    </div>\n\n    <label class=\"drawer-overlay\" for=\"sampleDrawer\"></label>\n  </div>\n</div>',
      jsxCode: '<div className=\"drawer h-fit\">\n  <input className=\"drawer-toggle\" type=\"checkbox\" id=\"sampleDrawer\" />\n  <div className=\"drawer-page-content\">\n    {/* page content here */}\n    <label htmlFor=\"sampleDrawer\" className=\"btn\">Drawer</label>\n  </div>\n  \n  <div className=\"drawer-sidebar\">\n    <div className=\"drawer-sidebar-content\">\n      {/* sidebar content here */}\n      <ul className=\"menu\">\n        <li><a href=\"#\">Item 1</a></li>\n        <li><a href=\"#\">Item 2</a></li>\n        <li><a href=\"#\">Item 3</a></li>\n      </ul>\n    </div>\n    \n    <label className=\"drawer-overlay\" htmlFor=\"sampleDrawer\" />\n  </div>\n</div>',
    },
    'opened drawer': {
      htmlCode: '<div class=\"drawer drawer-open\">\n  <input class=\"drawer-toggle\" type=\"checkbox\" id=\"sampleDrawer\"/>\n  <div class=\"drawer-page-content\">\n    <!-- page content here -->\n    <label for=\"sampleDrawer\" class=\"btn\">Drawer</label>\n  </div>\n\n  <div class=\"drawer-sidebar\">\n    <div class=\"drawer-sidebar-content\">\n      <!-- sidebar content here -->\n      <div>\n        <ul class=\"menu\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label class=\"drawer-overlay\" for=\"sampleDrawer\"></label>\n  </div>\n</div>',
      jsxCode: '<div className=\"drawer drawer-open\">\n  <input className=\"drawer-toggle\" type=\"checkbox\" id=\"sampleDrawer\" />\n  <div className=\"drawer-page-content\">\n    {/* page content here */}\n    <label htmlFor=\"sampleDrawer\" className=\"btn\">Drawer</label>\n  </div>\n  \n  <div className=\"drawer-sidebar\">\n    <div className=\"drawer-sidebar-content\">\n      {/* sidebar content here */}\n      <div>\n        <ul className=\"menu\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n    \n    <label className=\"drawer-overlay\" htmlFor=\"sampleDrawer\" />\n  </div>\n</div>',
    },
  }
}
