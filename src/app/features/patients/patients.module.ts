import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientsRoutingModule} from './patients-routing.module';
import {PatientsComponent} from "./patients.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PatientsViewDetailsComponent} from './patients-view-details/patients-view-details.component';
import {PatientsAddModalComponent} from './patients-add-modal/patients-add-modal.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PatientsComponent,
    PatientsViewDetailsComponent,
    PatientsAddModalComponent,
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
})
export class PatientsModule {
}
