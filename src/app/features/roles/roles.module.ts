import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RolesRoutingModule} from './roles-routing.module';
import {RolesComponent} from './roles.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RolesAddModalComponent} from './roles-add-modal/roles-add-modal.component';


@NgModule({
  declarations: [
    RolesComponent,
    RolesAddModalComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    ReactiveFormsModule
  ]
})
export class RolesModule {
}
