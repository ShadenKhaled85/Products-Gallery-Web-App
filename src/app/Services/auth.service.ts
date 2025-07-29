import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../Environments/environment.deployment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private httpClient: HttpClient ) { }

  signIn(data:object) : Observable<any>{
    return this.httpClient.post(`${enviroment.backendUrl}auth/login` , data)
  }
}
