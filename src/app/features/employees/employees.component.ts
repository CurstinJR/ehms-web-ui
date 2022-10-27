import {Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements  OnInit {
  empDetail: FormGroup;
  empObj : Employee = new Employee();
  empList : Employee[] = [];

  constructor( private formBuilder : FormBuilder, private empService : EmployeeService) { }

  ngOnInit(): void {

    this.getAllEmployee();

    this.empDetail = this.formBuilder.group({
      id : [''],
      firstname : [''],
      lastname: [''],
      roleId: [''],
      email: [''],
      password:[''],
      phonenumber:[''],

      });

  }

  addEmployee() {
    console.log(this.empDetail);
    this.empObj.id = this.empDetail.value.id;
    this.empObj.firstname = this.empDetail.value.name;
    this.empObj.lastname = this.empDetail.value.lastname;
    this.empObj.roleId = this.empDetail.value.roleId;
    this.empObj.email = this.empDetail.value.email;
    this.empObj.password = this.empDetail.value.password;
    this.empObj.phonenumber = this.empDetail.value.phonenumber;

    this.empService.addEmployee(this.empObj).subscribe(res=>{
      console.log(res);
      this.getAllEmployee();
    },err=>{
      console.log(err);
    });

  }

  getAllEmployee() {
    this.empService.getAllEmployee().subscribe(res=>{
      this.empList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editEmployee(emp : Employee) {
    this.empDetail.controls['id'].setValue(emp.id);
    this.empDetail.controls['firstname'].setValue(emp.firstname);
    this.empDetail.controls['lastname'].setValue(emp.lastname);
    this.empDetail.controls['role'].setValue(emp.roleId);
    this.empDetail.controls['email'].setValue(emp.email);
    this.empDetail.controls['password'].setValue(emp.password);
    this.empDetail.controls['phonenumber'].setValue(emp.phonenumber);

  }

  updateEmployee() {

    this.empObj.id = this.empDetail.value.id;
    this.empObj.firstname = this.empDetail.value.firstname;
    this.empObj.lastname = this.empDetail.value.lastname;
    this.empObj.roleId = this.empDetail.value.roleId;
    this.empObj.email = this.empDetail.value.email;
    this.empObj.password = this.empDetail.value.password;
    this.empObj.phonenumber = this.empDetail.value.phonenumber;

    this.empService.updateEmployee(this.empObj).subscribe(res=>{
      console.log(res);
      this.getAllEmployee();
    },err=>{
      console.log(err);
    })

  }

  deleteEmployee(emp : Employee) {

    this.empService.deleteEmployee(emp).subscribe(res=>{
      console.log(res);
      alert('Employee deleted successfully');
      this.getAllEmployee();
    },err => {
      console.log(err);
    });

  }

}




