import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  snippets = {
    'typical card': {
      htmlCode: '<div class=\"card w-[32rem]\">\n  <!-- card thumbnail -->\n  <div class=\"image image-card\" style=\"--image-url: url(\'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress\&cs=tinysrgb\&w=1260\&h=750\&dpr=1\');\"></div>\n\n  <!-- card body -->\n  <div class=\"card-body layout-spaced\">\n    <h5 class=\"card-title\">Mechanical Keyboard</h5>\n    <p>Take a look at some of the clicky, thocky and weird mechanical keyboards only here on KBD!</p>\n  </div>\n\n  <!-- card actions -->\n  <div class=\"card-actions justify-end\">\n    <button class=\"btn\">shop now</button>\n  </div>\n</div>',
      jsxCode: '<div className=\"card w-[32rem]\">\n  {/* card thumbnail */}\n  <div className=\"image image-card\" style={{--imageUrl: \'url(\"https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress\&cs=tinysrgb\&w=1260\&h=750\&dpr=1\")\'}} />\n  \n  {/* card body */}\n  <div className=\"card-body layout-spaced\">\n    <h5 className=\"card-title\">Mechanical Keyboard</h5>\n    <p>Take a look at some of the clicky, thocky and weird mechanical keyboards only here on KBD!</p>\n  </div>\n  \n  {/* card actions */}\n  <div className=\"card-actions justify-end\">\n    <button className=\"btn\">shop now</button>\n  </div>\n</div>',
    },
    'typical horizontal card': {
      htmlCode: '<div class=\"card card-horizontal w-[38rem] h-[16rem]\">\n  <!-- card image -->\n  <div class=\"image image-card\" style=\"--image-url: url(\'https://img.freepik.com/free-photo/top-view-beautiful-music-concept_23-2148605827.jpg?w=826\&t=st=1691481090~exp=1691481690~hmac=24227de354ba4da1cb13fce1e1981530adf63decc40bcd8fa94a9b0a5bc23186\')\"></div>\n\n  <div class=\"flex flex-col justify-between\">\n    <!-- card body -->\n    <div class=\"card-body layout-spaced\">\n      <h4 class=\"card-title\">Mix Playlist</h4>\n      <p>Play our recommended music based on what you play</p>\n    </div>\n\n    <!-- card actions -->\n    <div class=\"card-actions justify-end\">\n      <button class=\"btn\">Shuffle</button>\n    </div>\n  </div>\n</div>',
      jsxCode: '<div className=\"card card-horizontal w-[38rem] h-[16rem]\">\n  {/* card image */}\n  <div className=\"image image-card\" style={{-imageUrl: \'url(\"https://img.freepik.com/free-photo/top-view-beautiful-music-concept_23-2148605827.jpg?w=826\&t=st=1691481090~exp=1691481690~hmac=24227de354ba4da1cb13fce1e1981530adf63decc40bcd8fa94a9b0a5bc23186\")\'}} />\n  \n  <div className=\"flex flex-col justify-between\">\n    {/* card body */}\n    <div className=\"card-body layout-spaced\">\n      <h4 className=\"card-title\">Mix Playlist</h4>\n      <p>Play our recommended music based on what you play</p>\n    </div>\n    \n    {/* card actions */}\n    <div className=\"card-actions justify-end\">\n      <button className=\"btn\">Shuffle</button>\n    </div>\n  </div>\n</div>',
    },
    'outlined card': {
      htmlCode: '<div class=\"card card-outline w-[32rem]\">\n  <!-- card thumbnail -->\n  <div class=\"image image-card\" style=\"--image-url: url(\'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress\&cs=tinysrgb\&w=1260\&h=750\&dpr=1\');\"></div>\n\n  <!-- card body -->\n  <div class=\"card-body layout-spaced\">\n    <h5 class=\"card-title\">Mechanical Keyboard</h5>\n    <p>Take a look at some of the clicky, thocky and weird mechanical keyboards only here on KBD!</p>\n  </div>\n\n  <!-- card actions -->\n  <div class=\"card-actions justify-end\">\n    <button class=\"btn\">shop now</button>\n  </div>\n</div>',
      jsxCode: '<div className=\"card card-outline w-[32rem]\">\n  {/* card thumbnail */}\n  <div className=\"image image-card\" style={{-imageUrl: \'url(\"https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress\&cs=tinysrgb\&w=1260\&h=750\&dpr=1\")\'}} />\n  \n  {/* card body */}\n  <div className=\"card-body layout-spaced\">\n    <h5 className=\"card-title\">Mechanical Keyboard</h5>\n    <p>Take a look at some of the clicky, thocky and weird mechanical keyboards only here on KBD!</p>\n  </div>\n  \n  {/* card actions */}\n  <div className=\"card-actions justify-end\">\n    <button className=\"btn\">shop now</button>\n  </div>\n</div>',
    },
    'modal card': {
      htmlCode: '<div class=\"card w-[26.25rem]\">\n  <!-- card body -->\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Move to Archive?</h4>\n    <span>You can restore this back on Archives.</span>\n  </div>\n\n  <!-- card actions -->\n  <div class=\"card-actions justify-end\">\n    <button class=\"btn btn-ghost\">No</button>\n    <button class=\"btn\">Yes</button>\n  </div>\n</div>',
      jsxCode: '<div className=\"card w-[26.25rem]\">\n  {/* card body */}\n  <div className=\"card-body\">\n    <h4 className=\"card-title\">Move to Archive?</h4>\n    <span>You can restore this back on Archives.</span>\n  </div>\n  \n  {/* card actions */}\n  <div className=\"card-actions justify-end\">\n    <button className=\"btn btn-ghost\">No</button>\n    <button className=\"btn\">Yes</button>\n  </div>\n</div>',
    },
    'card with menu': {
      htmlCode: '<div class=\"card\">\n  <!-- menu component -->\n  <ul class=\"menu\">\n    <li><a href=\"#\">Item 1</a></li>\n    <li><a href=\"#\">Item 2</a></li>\n    <li><a href=\"#\">Item 3</a></li>\n  </ul>\n</div>',
      jsxCode: '<div className=\"card\">\n  {/* menu component */}\n  <ul className=\"menu\">\n    <li><a href=\"#\">Item 1</a></li>\n    <li><a href=\"#\">Item 2</a></li>\n    <li><a href=\"#\">Item 3</a></li>\n  </ul>\n</div>\n',
    },
  };
}