import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {RolesService} from "../services/roles.service";
import {RoleModel} from "../models/role.model";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: RoleModel[];

  constructor(private rolesService: RolesService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.rolesService
      .getAll()
      .subscribe({
        next: (data) => this.roles = data,
        error: (err) => this.toastrService.error(err.error.message, "Error"),
      });
  }
}
