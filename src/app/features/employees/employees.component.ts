import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {EmployeeModel} from '../models/employee.model';
import {EmployeeService} from '../services/employee.service';
import {AppIcon} from "../../core/_models/app-icon.model";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import {RoleModel} from "../models/role.model";
import {RolesService} from "../services/roles.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {

  employeeEditId: number;
  employee: EmployeeModel = new EmployeeModel();
  employees: EmployeeModel[] = [];
  roles: RoleModel[] = [];
  editEmployeeForm = this.formBuilder.group({
    firstName: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    lastName: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    role: new FormControl<RoleModel>(new RoleModel(), {nonNullable: true, validators: Validators.required}),
  })
  editIcon: AppIcon = {
    icon: faPenToSquare,
    size: "2x"
  }

  constructor(private formBuilder: FormBuilder,
              private employeeService: EmployeeService,
              private rolesService: RolesService) {
    this.employee.role = new RoleModel();
  }

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllRoles();
  }

  getAllEmployee() {
    this.employeeService.getAllEmployee()
      .subscribe({
        next: (data) => this.employees = data,
        error: (err) => console.log(err),
      });
  }

  getAllRoles() {
    this.rolesService.getAll()
      .subscribe({
        next: (data) => this.roles = data,
        error: (err) => console.log(err)
      });
  }

  getEmployee(employee: EmployeeModel) {
    this.employee = employee;
  }

  populateEmployee(employee: EmployeeModel) {
    this.employeeEditId = employee.id;
    this.editEmployeeForm.patchValue({
      firstName: employee.firstName,
      lastName: employee.lastName,
      role: employee.role
    })
  }

  onUpdate() {
    const employee: EmployeeModel = {
      id: this.employeeEditId,
      firstName: this.editEmployeeForm.getRawValue().firstName,
      lastName: this.editEmployeeForm.getRawValue().lastName,
      role: this.editEmployeeForm.getRawValue().role,
    }
    this.employeeService.updateEmployee(this.employeeEditId, employee)
      .subscribe({
        error: (err) => console.log(err),
        complete: () => {
        },
      });
    setTimeout(() => {
      window.location.reload();
    }, 1300);
  }

  deleteEmployee() {
    if (this.employee.id == undefined) {

    } else {
      this.employeeService.deleteEmployee(this.employee.id)
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
}




