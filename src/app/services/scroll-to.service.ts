import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollToService {

  constructor() { }

  scroll(id: string): void {
    var element = document.getElementById(id)!;
    var headerOffset = 80;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + document.querySelector('div.drawer-page-content')!.scrollTop - headerOffset;

    document.querySelector('div.drawer-page-content')!.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}
