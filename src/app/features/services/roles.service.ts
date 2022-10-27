import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {RoleModel} from "../models/role.model";

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  public api: string;

  constructor(private http: HttpClient) {
    this.api = `${environment.api}`;
  }

  getAll(): Observable<RoleModel[]> {
    return this.http.get<RoleModel[]>(`${this.api}/roles`);
  }

  getById(id: number) {
    return this.http.get<RoleModel>(`${this.api}/roles/${id}`);
  }

  save(patient: RoleModel) {
    return this.http.post<RoleModel>(`${this.api}/roles`, patient);
  }

  updateById(id: number, patient: RoleModel) {
    return this.http.put<RoleModel>(`${this.api}/roles/${id}`, patient)
  }

  deleteById(id: number) {
    return this.http.delete<RoleModel>(`${this.api}/roles/${id}`)
  }
}
