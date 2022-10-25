import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {VitalModel} from "../models/vital.model";

@Injectable({
  providedIn: 'root'
})
export class VitalsService {

  public api: string;

  constructor(private http: HttpClient) {
    this.api = `${environment.api}`;
  }

  getAll(): Observable<VitalModel[]> {
    return this.http.get<VitalModel[]>(`${this.api}/vitals`);
  }

  getById(id: number): Observable<VitalModel> {
    return this.http.get<VitalModel>(`${this.api}/vitals/${id}`);
  }

  getVitalsByPatientId(id: number): Observable<VitalModel> {
    return this.http.get<VitalModel>(`${this.api}/vitals/patient/${id}`);
  }
}
