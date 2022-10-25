import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {AppointmentModel} from "../models/appointment.model";



@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  public api: string;

  constructor(private http: HttpClient) {
    this.api = `${environment.api}`;
  }

  getAll(): Observable<AppointmentModel[]> {
    return this.http.get<AppointmentModel[]>(`${this.api}/appointments`);
  }
}
