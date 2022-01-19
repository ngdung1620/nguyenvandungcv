import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { NavLeftComponent } from './components/nav-left/nav-left.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { NavMobileComponent } from './components/nav-mobile/nav-mobile.component';


@NgModule({
  declarations: [
    NavLeftComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    NavMobileComponent
  ],
    exports: [
        NavLeftComponent,
        HomeComponent,
        AboutComponent,
        ServicesComponent,
        ContactComponent,
        NavMobileComponent
    ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatInputModule,
    MatIconModule
  ]
})
export class HomePageModule { }
