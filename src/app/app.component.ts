import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  upperDrawerLinks: any[] = [
    {
      name: 'How to Install',
      route: '/how-to-install',
    },
    {
      name: 'Configuration',
      route: '/configuration',
    },
    {
      name: 'Color Shades',
      route: '/color-shades',
    },
  ];

  lowerDrawerLinks: any[] = [
    {
      title: 'Inputs',
      routes: [
        {
          name: 'Button',
          route: '/button',
        },
        {
          name: 'Input Fields',
          route: '/input-fields',
        },
        {
          name: 'Slider',
          route: '/slider',
        },
      ]
    },
    {
      title: 'Containment',
      routes: [
        {
          name: 'Card',
          route: '/card',
        },
        {
          name: 'Dropdown',
          route: '/dropdown',
        },
        {
          name: 'Image Container',
          route: '/image-container',
        },
        {
          name: 'Menu',
          route: '/menu',
        },
        {
          name: 'Modal',
          route: '/modal',
        },
      ]
    },
    {
      title: 'Toggles/States',
      routes: [
        {
          name: 'Checkbox',
          route: '/checkbox',
        },
        {
          name: 'Swap',
          route: '/swap',
        },
        {
          name: 'Switch',
          route: '/switch',
        },
        {
          name: 'Radio Button',
          route: '/radio-button',
        },
      ]
    },
    {
      title: 'Navigations',
      routes: [
        {
          name: 'Navigation bar',
          route: '/navigation-bar',
        },
        {
          name: 'Navigation Drawer',
          route: '/navigation-drawer',
        },
        {
          name: 'Navigation Rail',
          route: '/navigation-rail',
        },
      ]
    },
    {
      title: 'Others',
      routes: [
        {
          name: 'Badge',
          route: '/badge',
        },
        {
          name: 'Divider',
          route: '/divider',
        },
        {
          name: 'Indicator',
          route: '/indicator',
        },
        {
          name: 'Progress Bar',
          route: '/progress-bar',
        },
      ]
    },
  ];

  constructor(private router: Router) {}

  isHomepage() {
    return this.router.url === '/' || this.router.url === '/home';
  }
}
