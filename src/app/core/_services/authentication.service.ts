import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../_models/user";
import {ENV_CONFIG, EnvironmentConfig} from "../_models/environment-config";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public api: string;
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  private item: string = localStorage.getItem('currentUser') || "";

  constructor(@Inject(ENV_CONFIG) private config: EnvironmentConfig,
              private http: HttpClient) {
    this.api = `${config.environment.api}`;
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(this.item));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.api}/auth/login`, {email, password})
      .pipe(map(user => {
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        user.authdata = window.btoa(`${email}:${password}`);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // @ts-ignore
    this.currentUserSubject.next(null);
  }
}
