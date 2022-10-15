import {Inject, Injectable} from '@angular/core';
import {ENV_CONFIG, EnvironmentConfig} from "../../_models/environment-config";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  api: string;

  constructor(@Inject(ENV_CONFIG) private config: EnvironmentConfig,
              private http: HttpClient) {
    this.api = `${config.environment.api}`;
  }

  /**
   * Sends a request to get a list of data.
   * @param path "/api/{resource}"
   */
  getAll<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.api}/${path}`);
  }
}
