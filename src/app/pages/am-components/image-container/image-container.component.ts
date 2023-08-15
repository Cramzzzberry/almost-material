import { Component } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent {
  snippets = {
    'a square image': {
      htmlCode: '<div class=\"image\" style=\"--image-url: url(\'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380\&t=st=1691415133~exp=1691415733~hmac=8c0f40e6bc18926c38bf4a1b65b2f5740122592b25fbcc5241b9e17308598a00\')\"></div>',
      jsxCode: '<div className=\"image\" style={{--imageUrl: \'url(\"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380\&t=st=1691415133~exp=1691415733~hmac=8c0f40e6bc18926c38bf4a1b65b2f5740122592b25fbcc5241b9e17308598a00\")\'}} />',
    },
    'a circle image': {
      htmlCode: '<div class=\"image image-circle\" style=\"--image-url: url(\'https://img.freepik.com/free-photo/tender-feminine-woman-with-blue-eyes-smiles-pleasantly-has-toothy-smile-wears-white-comfortable-sweater-looks-directly-camera-isolated-pink-background_273609-32160.jpg?w=1380\&t=st=1691415624~exp=1691416224~hmac=e921c4b34daa6ddc37207208206926736d926925a89eb76b66d8ff249c4580ed\')\"></div>',
      jsxCode: '<div className=\"image image-circle\" style={{--imageUrl: \'url(\"https://img.freepik.com/free-photo/tender-feminine-woman-with-blue-eyes-smiles-pleasantly-has-toothy-smile-wears-white-comfortable-sweater-looks-directly-camera-isolated-pink-background_273609-32160.jpg?w=1380\&t=st=1691415624~exp=1691416224~hmac=e921c4b34daa6ddc37207208206926736d926925a89eb76b66d8ff249c4580ed\")\'}} />',
    },
    'image in card': {
      htmlCode: '<div class=\"card w-[26rem]\">\n  <div class=\"image image-card\" style=\"--image-url: url(\'https://img.freepik.com/free-photo/cappuccino-wood-espresso-coffee-latte_1150-1632.jpg?w=1380\&t=st=1691421217~exp=1691421817~hmac=4ff7258b18ade2f12da7026c57a5159051a8e72cb3b39ace24a57a1861f481c2\')\"></div>\n\n  <div class=\"card-body layout-spaced\">\n    <h5 class=\"card-title\">How to create a coffee</h5>\n    <span>Learn how to create the tastiest bevarage on the planet!</span>\n  </div>\n\n  <div class=\"card-actions justify-end\">\n    <button class=\"btn\">visit page</button>\n  </div>\n</div>',
      jsxCode: '<div className=\"card w-[26rem]\">\n  <div className=\"image image-card\" style={{--imageUrl: \'url(\"https://img.freepik.com/free-photo/cappuccino-wood-espresso-coffee-latte_1150-1632.jpg?w=1380\&t=st=1691421217~exp=1691421817~hmac=4ff7258b18ade2f12da7026c57a5159051a8e72cb3b39ace24a57a1861f481c2\")\'}} />\n  \n  <div className=\"card-body layout-spaced\">\n    <h5 className=\"card-title\">How to create a coffee</h5>\n    <span>Learn how to create the tastiest bevarage on the planet!</span>\n  </div>\n  \n  <div className=\"card-actions justify-end\">\n    <button className=\"btn\">visit page</button>\n  </div>\n</div>',
    },
    'custom image dimentions': {
      htmlCode: '<div class=\"image w-full h-[24rem] rounded-[0.5rem]\" style=\"--image-url: url(\'https://img.freepik.com/free-photo/sunset-silhouettes-trees-mountains-generative-ai_169016-29371.jpg?w=1380\&t=st=1691420526~exp=1691421126~hmac=908944a9bc2e3b530371130687d2ec70fe0155b93d9b3aa3e081da01aff008c6\')\"></div>',
      jsxCode: '<div className=\"image w-full h-[24rem] rounded-[0.5rem]\" style={{--imageUrl: \'url(\"https://img.freepik.com/free-photo/sunset-silhouettes-trees-mountains-generative-ai_169016-29371.jpg?w=1380\&t=st=1691420526~exp=1691421126~hmac=908944a9bc2e3b530371130687d2ec70fe0155b93d9b3aa3e081da01aff008c6\")\'}} />',
    },
  }
}
