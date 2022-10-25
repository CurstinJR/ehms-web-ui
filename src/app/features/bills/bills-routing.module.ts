import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BillsComponent} from "./bills.component";

const routes: Routes = [
  {path: "", component: BillsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillsRoutingModule {
}
