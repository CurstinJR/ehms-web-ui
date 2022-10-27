import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {RolesService} from "../../services/roles.service";
import {RoleModel} from "../../models/role.model";
import {EmployeeModel} from "../../models/employee.model";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employees-add-modal',
  templateUrl: './employees-add-modal.component.html',
  styleUrls: ['./employees-add-modal.component.css']
})
export class EmployeesAddModalComponent implements OnInit {

  roles: RoleModel[];
  addEmployeeForm = this.formBuilder.group({
    firstName: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    lastName: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    role: new FormControl<RoleModel>(new RoleModel(), {nonNullable: true, validators: Validators.required}),
  });

  constructor(private formBuilder: FormBuilder,
              private employeeService: EmployeeService,
              private rolesService: RolesService) {
  }

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.rolesService
      .getAll()
      .subscribe(data => {
        this.roles = data;
      });
  }

  onSubmit() {
    const employee: EmployeeModel = {
      id: 0,
      firstName: this.addEmployeeForm.getRawValue().firstName,
      lastName: this.addEmployeeForm.getRawValue().lastName,
      role: this.addEmployeeForm.getRawValue().role,
    }
    this.employeeService.save(employee)
      .subscribe({
        error: (err) => console.log(err),
        complete: () => {
        },
      });
    setTimeout(() => {
      window.location.reload();
    }, 1300);
  }
}
