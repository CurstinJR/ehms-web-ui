import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {BillModel} from "../models/bill.model";

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  public api: string;

  constructor(private http: HttpClient) {
    this.api = `${environment.api}`;
  }

  getAll(): Observable<BillModel[]> {
    return this.http.get<BillModel[]>(`${this.api}/bills`);
  }

  getById(id: number) {
    return this.http.get<BillModel>(`${this.api}/bills/${id}`);
  }

  save(bill: BillModel) {
    return this.http.post<BillModel>(`${this.api}/bills`, bill);
  }

  updateById(id: number, bill: BillModel) {
    return this.http.put<BillModel>(`${this.api}/bills/${id}`, bill)
  }

  deleteById(id: number) {
    return this.http.delete<BillModel>(`${this.api}/bills/${id}`)
  }
}
