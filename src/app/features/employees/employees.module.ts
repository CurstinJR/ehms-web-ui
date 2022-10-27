import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EmployeesRoutingModule} from './employees-routing.module';
import {EmployeesComponent} from "./employees.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmployeesAddModalComponent} from './employees-add-modal/employees-add-modal.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesAddModalComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class EmployeesModule {
}
