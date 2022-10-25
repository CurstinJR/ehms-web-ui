import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from "./overview.component";
import {AuthGuard} from "../../core/utils/auth/auth.guard";

const routes: Routes = [
  {path: "", component: OverviewComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule {
}
