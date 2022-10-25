import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppointmentsComponent} from "./appointments.component";
import {AuthGuard} from "../../core/utils/auth/auth.guard";

const routes: Routes = [
  {path: "", component: AppointmentsComponent,
  canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule {
}
