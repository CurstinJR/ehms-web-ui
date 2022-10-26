import {EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  @Input() employee: Employee;
  @Output() onRemoveEmployee = new EventEmitter<number>();
  @Output() onEditEmployee = new EventEmitter<number>();

  constructor() {
    this.employee = {
      firstName: '',
      lastName: '',
      userRole: role,
      logindetails: LoginCredentials,
      contactdetails: ContactDetails,
    };
  }

  ngOnInit(): void {
    console.log(this.employee);
  }
  removeEmployeeClicked() {
    this.onRemoveEmployee.emit(this.employee.id);
  }

  updateEmployeeClicked(){
    this.onEditEmployee.emit(this.employee.id);
  }
}
