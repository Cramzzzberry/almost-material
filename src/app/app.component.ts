import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'almost-material-docs';
  upperDrawerLinks: any[] = [
    {
      name: 'How to Install',
      route: '/documentation/how-to-install',
    },
    {
      name: 'Configuration',
      route: '/documentation/configuration',
    },
    {
      name: 'Color Shades',
      route: '/documentation/color-shades',
    },
  ];

  lowerDrawerLinks: any[] = [
    {
      title: 'Inputs',
      routes: [
        {
          name: 'Button',
          route: '/documentation/button',
        },
        {
          name: 'Input Fields',
          route: '/documentation/input-fields',
        },
        {
          name: 'Slider',
          route: '/documentation/slider',
        },
      ]
    },
    {
      title: 'Containment',
      routes: [
        {
          name: 'Card',
          route: '/documentation/card',
        },
        {
          name: 'Dropdown',
          route: '/documentation/dropdown',
        },
        {
          name: 'Image Container',
          route: '/documentation/image-container',
        },
        {
          name: 'Menu',
          route: '/documentation/menu',
        },
        {
          name: 'Modal',
          route: '/documentation/modal',
        },
      ]
    },
    {
      title: 'Toggles/States',
      routes: [
        {
          name: 'Checkbox',
          route: '/documentation/checkbox',
        },
        {
          name: 'Swap',
          route: '/documentation/swap',
        },
        {
          name: 'Switch',
          route: '/documentation/switch',
        },
        {
          name: 'Radio Button',
          route: '/documentation/radio-button',
        },
      ]
    },
    {
      title: 'Navigations',
      routes: [
        {
          name: 'Navigation bar',
          route: '/documentation/navigation-bar',
        },
        {
          name: 'Navigation Drawer',
          route: '/documentation/navigation-drawer',
        },
        {
          name: 'Navigation Rail',
          route: '/documentation/navigation-rail',
        },
      ]
    },
    {
      title: 'Others',
      routes: [
        {
          name: 'Badge',
          route: '/documentation/badge',
        },
        {
          name: 'Divider',
          route: '/documentation/divider',
        },
        {
          name: 'Indicator',
          route: '/documentation/indicator',
        },
        {
          name: 'Progress Bar',
          route: '/documentation/progress-bar',
        },
      ]
    },
  ];

  constructor(private router: Router) {}

  isHomepage() {
    return this.router.url === '/' || this.router.url === '/home';
  }
}
