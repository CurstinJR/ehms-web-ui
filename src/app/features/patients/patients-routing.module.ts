import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientsComponent} from "./patients.component";
import {AuthGuard} from "../../core/utils/auth/auth.guard";
import {PatientsViewDetailsComponent} from "./patients-view-details/patients-view-details.component";

const routes: Routes = [
  {
    path: "",
    component: PatientsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ":id",
    component: PatientsViewDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule {
}
