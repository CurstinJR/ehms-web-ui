import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {OverviewComponent} from './components/overview/overview.component';
import {PatientsComponent} from "../patients/patients.component";


@NgModule({
  declarations: [
    OverviewComponent,
    PatientsComponent
  ],
  exports: [
    OverviewComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
