import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutsRoutingModule} from './layouts-routing.module';
import {DashboardLayoutComponent} from "./dashboard-layout/dashboard-layout.component";
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {LoginLayoutComponent} from './login-layout/login-layout.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    LoginLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    FontAwesomeModule
  ]
})
export class LayoutsModule {
}
