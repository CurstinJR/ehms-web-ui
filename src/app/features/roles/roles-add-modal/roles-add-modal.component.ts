import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {RolesService} from "../../services/roles.service";
import {RoleModel} from "../../models/role.model";

@Component({
  selector: 'app-roles-add-modal',
  templateUrl: './roles-add-modal.component.html',
  styleUrls: ['./roles-add-modal.component.css']
})
export class RolesAddModalComponent implements OnInit {

  addRoleForm = this.formBuilder.group({
    name: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    description: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
  })

  constructor(private formBuilder: FormBuilder,
              private rolesService: RolesService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const role: RoleModel = {
      id: 0,
      name: this.addRoleForm.getRawValue().name,
      description: this.addRoleForm.getRawValue().description
    }
    this.rolesService.save(role)
      .subscribe({
        error: (err) => this.toastrService.error(err, "Error"),
        complete: () => this.toastrService.success(
          `New role ${role.name} added!`,
          "Role created")
      });
    setTimeout(() => {
      window.location.reload();
    }, 1300);
  }
}
