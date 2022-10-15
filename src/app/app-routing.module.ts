import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import {LoginComponent} from "./features/login/login.component";
import {AuthGuard} from "./core/utils/auth/auth.guard";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', redirectTo: '', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
