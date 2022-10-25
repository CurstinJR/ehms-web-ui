import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientsRoutingModule} from './patients-routing.module';
import {PatientsComponent} from "./patients.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PatientsViewDetailsComponent} from './patients-view-details/patients-view-details.component';

@NgModule({
  declarations: [
    PatientsComponent,
    PatientsViewDetailsComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FontAwesomeModule
  ]
})
export class PatientsModule {
}
