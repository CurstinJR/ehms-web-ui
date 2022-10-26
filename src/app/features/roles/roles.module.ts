import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RolesRoutingModule} from './roles-routing.module';
import {RolesComponent} from './roles.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RolesComponent
  ],
    imports: [
        CommonModule,
        RolesRoutingModule,
        ReactiveFormsModule
    ]
})
export class RolesModule {
}
