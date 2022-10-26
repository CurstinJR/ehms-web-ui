import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {PatientModel} from "../models/patient.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  public api: string;

  constructor(private http: HttpClient) {
    this.api = `${environment.api}`;
  }

  getAll(): Observable<PatientModel[]> {
    return this.http.get<PatientModel[]>(`${this.api}/patients`);
  }

  getById(id: number) {
    return this.http.get<PatientModel>(`${this.api}/patients/${id}`);
  }

  add(patient: PatientModel) {
    return this.http.post<PatientModel>(`${this.api}/patients`, patient);
  }

  updateById(id: number, patient: PatientModel) {
    return this.http.put<PatientModel>(`${this.api}/patients/${id}`, patient)
  }

  deleteById(id: number) {
    return this.http.delete<PatientModel>(`${this.api}/patients/${id}`)
  }
}
