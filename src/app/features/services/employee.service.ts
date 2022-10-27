import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EmployeeModel} from '../models/employee.model';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public api: string;

  constructor(private http: HttpClient) {
    this.api = `${environment.api}`;
  }

  save(emp: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(`${this.api}/employees`, emp);
  }

  getAllEmployee(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(`${this.api}/employees`);
  }

  updateEmployee(id: number, emp: EmployeeModel): Observable<EmployeeModel> {
    return this.http.put<EmployeeModel>(`${this.api}/employees/${id}`, emp);
  }

  deleteEmployee(id: number): Observable<EmployeeModel> {
    return this.http.delete<EmployeeModel>(`${this.api}/employees/${id}`);
  }
}
