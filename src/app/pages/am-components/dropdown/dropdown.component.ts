import { Component } from '@angular/core';
import { ScrollToService } from '../../../services/scroll-to.service'

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  constructor(private scrollToService: ScrollToService) {}
  stService = this.scrollToService;

  snippets = {
    'dropdown': {
      htmlCode: '<div class=\"dropdown\">\n  <button tabIndex=\"0\" class=\"btn\">Dropdown</button>\n  <div tabIndex=\"0\" class=\"dropdown-content z-[1] card\">\n    <ul class=\"menu w-56\">\n      <li><a>Link 1</a></li>\n      <li><a>Link 2</a></li>\n      <li><a>Link 3</a></li>\n    </ul>\n  </div>\n</div>',
      jsxCode: '<div className=\"dropdown\">\n  <button tabIndex={0} className=\"btn\">Dropdown</button>\n  <div tabIndex={0} className=\"dropdown-content z-[1] card\">\n    <ul className=\"menu w-56\">\n      <li><a>Link 1</a></li>\n      <li><a>Link 2</a></li>\n      <li><a>Link 3</a></li>\n    </ul>\n  </div>\n</div>',
    },
    'dropdown top': {
      htmlCode: '<div class=\"dropdown dropdown-top\">\n  <button tabIndex=\"0\" class=\"btn\">Dropdown</button>\n  <div tabIndex=\"0\" class=\"dropdown-content z-[1] card\">\n    <ul class=\"menu w-56\">\n      <li><a>Link 1</a></li>\n      <li><a>Link 2</a></li>\n      <li><a>Link 3</a></li>\n    </ul>\n  </div>\n</div>',
      jsxCode: '<div className=\"dropdown dropdown-top\">\n  <button tabIndex={0} className=\"btn\">Dropdown</button>\n  <div tabIndex={0} className=\"dropdown-content z-[1] card\">\n    <ul className=\"menu w-56\">\n      <li><a>Link 1</a></li>\n      <li><a>Link 2</a></li>\n      <li><a>Link 3</a></li>\n    </ul>\n  </div>\n</div>',
    },
    'dropdown top aligned to end': {
      htmlCode: '<div class=\"dropdown dropdown-top dropdown-end\">\n  <button tabIndex=\"0\" class=\"btn\">Dropdown</button>\n  <div tabIndex=\"0\" class=\"dropdown-content z-[1] card\">\n    <ul class=\"menu w-56\">\n      <li><a>Link 1</a></li>\n      <li><a>Link 2</a></li>\n      <li><a>Link 3</a></li>\n    </ul>\n  </div>\n</div>',
      jsxCode: '<div className=\"dropdown dropdown-top dropdown-end\">\n  <button tabIndex={0} className=\"btn\">Dropdown</button>\n  <div tabIndex={0} className=\"dropdown-content z-[1] card\">\n    <ul className=\"menu w-56\">\n      <li><a>Link 1</a></li>\n      <li><a>Link 2</a></li>\n      <li><a>Link 3</a></li>\n    </ul>\n  </div>\n</div>',
    },
    'dropdown bottom': {
      htmlCode: '<div class=\"dropdown dropdown-bottom\">\n  <button tabIndex=\"0\" class=\"btn\">Dropdown</button>\n  <div tabIndex=\"0\" class=\"dropdown-content z-[1] card\">\n    <ul class=\"menu w-56\">\n      <li><a>Link 1</a></li>\n      <li><a>Link 2</a></li>\n      <li><a>Link 3</a></li>\n    </ul>\n  </div>\n</div>',
      jsxCode: '<div className=\"dropdown dropdown-bottom\">\n  <button tabIndex={0} className=\"btn\">Dropdown</button>\n  <div tabIndex={0} className=\"dropdown-content z-[1] card\">\n    <ul className=\"menu w-56\">\n      <li><a>Link 1</a></li>\n      <li><a>Link 2</a></li>\n      <li><a>Link 3</a></li>\n    </ul>\n  </div>\n</div>',
    },
    'dropdown bottom aligned to end': {
      htmlCode: '<div class=\"dropdown dropdown-bottom dropdown-end\">\n  <button tabIndex=\"0\" class=\"btn\">Dropdown</button>\n  <div tabIndex=\"0\" class=\"dropdown-content z-[1] card\">\n    <ul class=\"menu w-56\">\n      <li><a>Link 1</a></li>\n      <li><a>Link 2</a></li>\n      <li><a>Link 3</a></li>\n    </ul>\n  </div>\n</div>',
      jsxCode: '<div className=\"dropdown dropdown-bottom dropdown-end\">\n  <button tabIndex={0} className=\"btn\">Dropdown</button>\n  <div tabIndex={0} className=\"dropdown-content z-[1] card\">\n    <ul className=\"menu w-56\">\n      <li><a>Link 1</a></li>\n      <li><a>Link 2</a></li>\n      <li><a>Link 3</a></li>\n    </ul>\n  </div>\n</div>',
    },
    'dropdown left': {
      htmlCode: '<div class=\"dropdown dropdown-left\">\n  <button tabIndex=\"0\" class=\"btn\">Dropdown</button>\n  <div tabIndex=\"0\" class=\"dropdown-content z-[1] card\">\n    <ul class=\"menu w-56\">\n      <li><a>Link 1</a></li>\n      <li><a>Link 2</a></li>\n      <li><a>Link 3</a></li>\n    </ul>\n  </div>\n</div>',
      jsxCode: '<div className=\"dropdown dropdown-left\">\n  <button tabIndex={0} className=\"btn\">Dropdown</button>\n  <div tabIndex={0} className=\"dropdown-content z-[1] card\">\n    <ul className=\"menu w-56\">\n      <li><a>Link 1</a></li>\n      <li><a>Link 2</a></li>\n      <li><a>Link 3</a></li>\n    </ul>\n  </div>\n</div>',
    },
    'dropdown left aligned to end': {
      htmlCode: '<div class=\"dropdown dropdown-left dropdown-end\">\n  <button tabIndex=\"0\" class=\"btn\">Dropdown</button>\n  <div tabIndex=\"0\" class=\"dropdown-content z-[1] card\">\n    <ul class=\"menu w-56\">\n      <li><a>Link 1</a></li>\n      <li><a>Link 2</a></li>\n      <li><a>Link 3</a></li>\n    </ul>\n  </div>\n</div>',
      jsxCode: '<div className=\"dropdown dropdown-left dropdown-end\">\n  <button tabIndex={0} className=\"btn\">Dropdown</button>\n  <div tabIndex={0} className=\"dropdown-content z-[1] card\">\n    <ul className=\"menu w-56\">\n      <li><a>Link 1</a></li>\n      <li><a>Link 2</a></li>\n      <li><a>Link 3</a></li>\n    </ul>\n  </div>\n</div>',
    },
    'dropdown right': {
      htmlCode: '<div class=\"dropdown dropdown-right\">\n  <button tabIndex=\"0\" class=\"btn\">Dropdown</button>\n  <div tabIndex=\"0\" class=\"dropdown-content z-[1] card\">\n    <ul class=\"menu w-56\">\n      <li><a>Link 1</a></li>\n      <li><a>Link 2</a></li>\n      <li><a>Link 3</a></li>\n    </ul>\n  </div>\n</div>',
      jsxCode: '<div className=\"dropdown dropdown-right\">\n  <button tabIndex={0} className=\"btn\">Dropdown</button>\n  <div tabIndex={0} className=\"dropdown-content z-[1] card\">\n    <ul className=\"menu w-56\">\n      <li><a>Link 1</a></li>\n      <li><a>Link 2</a></li>\n      <li><a>Link 3</a></li>\n    </ul>\n  </div>\n</div>',
    },
    'dropdown right aligned to end': {
      htmlCode: '<div class=\"dropdown dropdown-right dropdown-end\">\n  <button tabIndex=\"0\" class=\"btn\">Dropdown</button>\n  <div tabIndex=\"0\" class=\"dropdown-content z-[1] card\">\n    <ul class=\"menu w-56\">\n      <li><a>Link 1</a></li>\n      <li><a>Link 2</a></li>\n      <li><a>Link 3</a></li>\n    </ul>\n  </div>\n</div>',
      jsxCode: '<div className=\"dropdown dropdown-right dropdown-end\">\n  <button tabIndex={0} className=\"btn\">Dropdown</button>\n  <div tabIndex={0} className=\"dropdown-content z-[1] card\">\n    <ul className=\"menu w-56\">\n      <li><a>Link 1</a></li>\n      <li><a>Link 2</a></li>\n      <li><a>Link 3</a></li>\n    </ul>\n  </div>\n</div>',
    },
  }
}
