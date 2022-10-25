import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppointmentsRoutingModule} from './appointments-routing.module';
import {AppointmentsComponent} from "./appointments.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    AppointmentsComponent
  ],
    imports: [
        CommonModule,
        AppointmentsRoutingModule,
        FontAwesomeModule
    ]
})
export class AppointmentsModule {
}
