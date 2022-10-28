import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BillsRoutingModule} from './bills-routing.module';
import {BillsComponent} from './bills.component';
import {BillsAddModalComponent} from './bills-add-modal/bills-add-modal.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BillsComponent,
    BillsAddModalComponent
  ],
  imports: [
    CommonModule,
    BillsRoutingModule,
    ReactiveFormsModule
  ]
})
export class BillsModule {
}
