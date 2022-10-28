import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PrescriptionRoutingModule} from './prescription-routing.module';
import {PrescriptionComponent} from "./prescription.component";
import {ViewPrescriptionComponent} from './view-prescription/view-prescription.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PrescriptionComponent,
    ViewPrescriptionComponent
  ],
  imports: [
    CommonModule,
    PrescriptionRoutingModule,
    ReactiveFormsModule
  ]
})
export class PrescriptionModule {
}
