import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//component blocks
import { TabsComponent } from './component-blocks/tabs/tabs.component';
import { NavbarComponent } from './component-blocks/navbar/navbar.component';

//pages
import { HomeComponent } from './pages/home/home.component';
import { HowToInstallComponent } from './pages/how-to-install/how-to-install.component';
import { ColorsComponent } from './pages/colors/colors.component';

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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HowToInstallComponent,
    ColorsComponent,
    ButtonComponent,
    InputFieldsComponent,
    SliderComponent,
    CardComponent,
    DropdownComponent,
    ImageContainerComponent,
    MenuComponent,
    ModalComponent,
    CheckboxComponent,
    SwapComponent,
    SwitchComponent,
    RadioButtonComponent,
    NavigationBarComponent,
    NavigationDrawerComponent,
    NavigationRailComponent,
    BadgeComponent,
    DividerComponent,
    IndicatorComponent,
    ProgressBarComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
