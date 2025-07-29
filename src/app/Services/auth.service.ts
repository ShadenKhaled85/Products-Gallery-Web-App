import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { enviroment } from '../Environments/environment.deployment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserLoggedSubject = new BehaviorSubject<boolean>(false);
  isUserLogged$ = this.isUserLoggedSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  signIn(data: object): Observable<any> {
    return this.httpClient.post(`${enviroment.backendUrl}auth/login`, data);
  }

  setLoginStatus(status: boolean) {
    this.isUserLoggedSubject.next(status);
  }

  getLoginStatus(): boolean {
    return this.isUserLoggedSubject.getValue();
  }
}
