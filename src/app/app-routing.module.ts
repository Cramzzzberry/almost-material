import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { HomeComponent } from './pages/home/home.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { ColorShadesComponent } from './pages/color-shades/color-shades.component';
import { HowToInstallComponent } from './pages/how-to-install/how-to-install.component';

//pages/components
import { ButtonComponent } from './pages/am-components/button/button.component';
import { InputFieldsComponent } from './pages/am-components/input-fields/input-fields.component';
import { SliderComponent } from './pages/am-components/slider/slider.component';
import { CardComponent } from './pages/am-components/card/card.component';
import { DropdownComponent } from './pages/am-components/dropdown/dropdown.component';
import { ImageContainerComponent } from './pages/am-components/image-container/image-container.component';
import { MenuComponent } from './pages/am-components/menu/menu.component';
import { ModalComponent } from './pages/am-components/modal/modal.component';

import { CheckboxComponent } from './pages/am-components/checkbox/checkbox.component';
import { SwapComponent } from './pages/am-components/swap/swap.component';
import { SwitchComponent } from './pages/am-components/switch/switch.component';
import { RadioButtonComponent } from './pages/am-components/radio-button/radio-button.component';
import { NavigationBarComponent } from './pages/am-components/navigation-bar/navigation-bar.component';
import { NavigationDrawerComponent } from './pages/am-components/navigation-drawer/navigation-drawer.component';
import { NavigationRailComponent } from './pages/am-components/navigation-rail/navigation-rail.component';
import { BadgeComponent } from './pages/am-components/badge/badge.component';
import { DividerComponent } from './pages/am-components/divider/divider.component';
import { IndicatorComponent } from './pages/am-components/indicator/indicator.component';
import { ProgressBarComponent } from './pages/am-components/progress-bar/progress-bar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Almost Material' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'how-to-install', component: HowToInstallComponent, title: 'Almost Material' },
  { path: 'configuration', component: ConfigurationComponent, title: 'Almost Material' },
  { path: 'color-shades', component: ColorShadesComponent, title: 'Almost Material' },
  { path: 'button', component: ButtonComponent, title: 'Almost Material' },
  { path: 'input-fields', component: InputFieldsComponent, title: 'Almost Material' },
  { path: 'slider', component: SliderComponent, title: 'Almost Material' },
  { path: 'card', component: CardComponent, title: 'Almost Material' },
  { path: 'dropdown', component: DropdownComponent, title: 'Almost Material' },
  { path: 'image-container', component: ImageContainerComponent, title: 'Almost Material' },
  { path: 'menu', component: MenuComponent, title: 'Almost Material' },
  { path: 'modal', component: ModalComponent, title: 'Almost Material' },
  { path: 'checkbox', component: CheckboxComponent, title: 'Almost Material' },
  { path: 'swap', component: SwapComponent, title: 'Almost Material' },
  { path: 'switch', component: SwitchComponent, title: 'Almost Material' },
  { path: 'radio-button', component: RadioButtonComponent, title: 'Almost Material' },
  { path: 'navigation-bar', component: NavigationBarComponent, title: 'Almost Material' },
  { path: 'navigation-drawer', component: NavigationDrawerComponent, title: 'Almost Material' },
  { path: 'navigation-rail', component: NavigationRailComponent, title: 'Almost Material' },
  { path: 'badge', component: BadgeComponent, title: 'Almost Material' },
  { path: 'divider', component: DividerComponent, title: 'Almost Material' },
  { path: 'indicator', component: IndicatorComponent, title: 'Almost Material' },
  { path: 'progress-bar', component: ProgressBarComponent, title: 'Almost Material' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
