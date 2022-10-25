import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppointmentsRoutingModule} from './appointments-routing.module';
import {AppointmentsComponent} from "./appointments.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AppointmentAddModalComponent} from './appointment-add-modal/appointment-add-modal.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppointmentsComponent,
    AppointmentAddModalComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class AppointmentsModule {
}
