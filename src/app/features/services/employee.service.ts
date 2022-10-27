import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  addEmpURL : string;
  getEmpURL : string;
  updateEmpUrl : string;
  deleteEmpUrl : string;

  constructor(private http : HttpClient) {

    this.addEmpURL = 'http://localhost:63342/emp/addEmployee';
    this.getEmpURL = 'http://localhost:63342/emp/getAll';
    this.updateEmpUrl = 'http://localhost:63342/emp/updateEmployee';
    this.deleteEmpUrl = 'http://localhost:63342/emp/deleteEmployeeById';

  }

  addEmployee(emp : Employee): Observable<Employee> {
    return this.http.post<Employee>(this.addEmpURL,emp);
  }

  getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.getEmpURL);
  }

  updateEmployee(emp :Employee) : Observable<Employee>{
    return this.http.put<Employee>(this.updateEmpUrl, emp);
  }

  deleteEmployee(emp : Employee) : Observable<Employee> {
    return this.http.delete<Employee>(this.deleteEmpUrl+'/'+emp.id);
  }


}
