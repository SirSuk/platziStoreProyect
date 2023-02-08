import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../inerfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  urlBase = 'https://api.escuelajs.co/api/v1/users/'

  constructor(private http: HttpClient) {}



  getUser(idUsuario: number) {      return this.http.get<Usuario>(this.urlBase + idUsuario, this.cabeceraAuth())  }



  getUsers() {
    return this.http.get<Usuario[]>(this.urlBase , this.cabeceraAuth())
  }

  deleteUser(idUsuario: number) {
    return this.http.delete<boolean>(this.urlBase + idUsuario, this.cabeceraAuth())
  }


  ngOnInit():void {

  }
  updateUser(idUsuario:number, datosUsuario: Usuario) {
    return this.http.put<any>(this.urlBase + idUsuario, datosUsuario, this.cabeceraAuth())

  }

  createUser( datosUsuario: Usuario) {
    return this.http.post<any>(this.urlBase , datosUsuario, this.cabeceraAuth())

  }



  cabeceraAuth() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
  }
}
