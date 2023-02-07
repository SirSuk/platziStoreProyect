import { Injectable } from '@angular/core';
// import { Login } from '../inerfaces/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  urlBase= 'https://api.escuelajs.co/api/v1/'
  constructor(private http: HttpClient) { }


  login(datos:any){
    return this.http.post<any>(this.urlBase + 'auth/login', datos)
  }

  profile() {
    return this.http.get<any>(this.urlBase + 'auth/profile', this.cabeceraAuthorization())
   
  }

  cabeceraAuthorization() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' +token
      })
    }
  }

}
