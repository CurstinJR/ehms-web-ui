import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import { Employee } from '../models/employee.model';


@Injectable({
  providedIn: 'root',
})

export class EmployeeService {


  constructor(private http: HttpClient) {}

  public api: string;

  constructor(private http: HttpClient) {
    this.api = `${environment.api}`;
  }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.api}/employees`);
  }

  getById(id: number) {
    return this.http.get<Employee>(`${this.api}/employees/${id}`);
  }
}
