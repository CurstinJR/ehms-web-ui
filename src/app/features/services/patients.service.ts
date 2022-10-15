import {Injectable} from '@angular/core';
import {DataService} from "../../core/utils/http/data.service";
import {Observable} from "rxjs";
import {PatientModel} from "../models/patient.model";

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private data: DataService) {
  }

  getAll(): Observable<PatientModel[]> {
    return this.data.getAll<PatientModel[]>(`patients`);
  }
}
