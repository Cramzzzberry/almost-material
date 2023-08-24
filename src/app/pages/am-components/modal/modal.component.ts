import { Component } from '@angular/core';
import { ScrollToService } from '../../../services/scroll-to.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(private scrollToService: ScrollToService) {}
  stService = this.scrollToService;

  snippets = {
    'modal': {
      htmlCode: '<label for=\"myModal\" class=\"btn\">Click Me</label>\n\n<input class=\"modal-toggle\" type=\"checkbox\" id=\"myModal\" />\n<div class=\"modal\">\n  <div class=\"modal-content\">\n    <div class=\"card w-[26.25rem]\">\n      <!-- card body -->\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Woah a Dialog!</h4>\n        <span>Put your own description here that gives more details about this dialog.</span>\n      </div>\n\n      <!-- card actions -->\n      <div class=\"card-actions justify-end\">\n        <label for=\"myModal\" class=\"btn btn-ghost\">close</label>\n        <label for=\"myModal\" class=\"btn\">ok</label>\n      </div>\n    </div>\n  </div>\n</div>',
      jsxCode: '<label htmlFor=\"myModal\" className=\"btn\">Click Me</label>\n\n<input className=\"modal-toggle\" type=\"checkbox\" id=\"myModal\" />\n<div className=\"modal\">\n  <div className=\"modal-content\">\n    <div className=\"card w-[26.25rem]\">\n      {/* card body */}\n      <div className=\"card-body\">\n        <h4 className=\"card-title\">Woah a Dialog!</h4>\n        <span>Put your own description here that gives more details about this dialog.</span>\n      </div>\n      \n      {/* card actions */}\n      <div className=\"card-actions justify-end\">\n        <label htmlFor=\"myModal\" className=\"btn btn-ghost\">close</label>\n        <label htmlFor=\"myModal\" className=\"btn\">ok</label>\n      </div>\n    </div>\n  </div>\n</div>',
    },
    'modal that closes on outside click': {
      htmlCode: '<label for=\"myModal\" class=\"btn\">Click Me</label>\n\n<input class=\"modal-toggle\" type=\"checkbox\" id=\"myModal\" />\n<div class=\"modal\">\n  <div class=\"modal-content\">\n    <div class=\"card w-[26.25rem]\">\n      <!-- card body -->\n      <div class=\"card-body text-center\">\n        <h4 class=\"card-title\">Done!</h4>\n        <span>Click on outside to close.</span>\n      </div>\n    </div>\n\n    <!-- the label for closing the modal -->\n    <label for=\"myModal\" class=\"modal-backdrop\"></label>\n  </div>\n</div>',
      jsxCode: '<label htmlFor=\"myModal\" className=\"btn\">Click Me</label>\n\n<input className=\"modal-toggle\" type=\"checkbox\" id=\"myModal\" />\n<div className=\"modal\">\n  <div className=\"modal-content\">\n    <div className=\"card w-[26.25rem]\">\n      {/* card body */}\n      <div className=\"card-body text-center\">\n        <h4 className=\"card-title\">Done!</h4>\n        <span>Click on outside to close.</span>\n      </div>\n    </div>\n    \n    {/* the label for closing the modal */}\n    <label htmlFor=\"myModal\" className=\"modal-backdrop\" />\n  </div>\n</div>',
    },
  }
}
 