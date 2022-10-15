import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SidebarComponent} from "./core/components/sidebar/sidebar.component";
import {HeaderComponent} from "./core/components/header/header.component";
import {DashboardModule} from "./features/dashboard/dashboard.module";
import {HttpModule} from "./core/utils/http/http.module";
import {environment} from "../environments/environment.prod";
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import {BasicAuthInterceptor} from "./core/utils/auth/basic-auth.interceptor";
import {LoginComponent} from './features/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLinkWithHref,
    RouterLinkActive,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterLink,
    HttpModule.forRoot({environment}),
    DashboardModule
  ],
  providers: [
    // TODO: Fix http interceptors (check console log)
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true}
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
