import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrescriptionComponent} from "./prescription.component";
import {ViewPrescriptionComponent} from "./view-prescription/view-prescription.component";

const routes: Routes = [
  {path: "", component: PrescriptionComponent},
  {path: "view/:id", component: ViewPrescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescriptionRoutingModule {
}
