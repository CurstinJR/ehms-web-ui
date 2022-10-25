import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardLayoutComponent} from "./dashboard-layout/dashboard-layout.component";
import {OverviewModule} from "../../../features/overview/overview.module";
import {PatientsModule} from "../../../features/patients/patients.module";
import {LoginLayoutComponent} from "./login-layout/login-layout.component";
import {LoginModule} from "../../../features/login/login.module";
import {AppointmentsModule} from "../../../features/appointments/appointments.module";
import {EmployeesModule} from "../../../features/employees/employees.module";
import {BillsModule} from "../../../features/bills/bills.module";
import {RolesModule} from "../../../features/roles/roles.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  {
    path: "",
    component: DashboardLayoutComponent,
    children: [
      {path: "dashboard", loadChildren: () => OverviewModule},
      {path: "patients", loadChildren: () => PatientsModule},
      {path: "appointments", loadChildren: () => AppointmentsModule},
      {path: "employees", loadChildren: () => EmployeesModule},
      {path: "bills", loadChildren: () => BillsModule},
      {path: "roles", loadChildren: () => RolesModule},
    ]
  },
  {
    path: "",
    component: LoginLayoutComponent,
    children: [
      {path: 'login', loadChildren: () => LoginModule}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule {
}
