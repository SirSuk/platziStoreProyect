import { Component } from '@angular/core';
import { Usuario} from '../inerfaces/usuario';
import { LoginServiceService } from '../services/login-service.service';
import { UsuariosService } from '../services/usuarios.service';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-area-personal',
  templateUrl: './area-personal.component.html',
  styleUrls: ['./area-personal.component.css']
})
export class AreaPersonalComponent {
  usuario!: Usuario
  mensajeError : string = ''
  mensajeOk: boolean = false

  constructor(private service: UsuariosService){

  }

  ngOnInit():void{
  const user = localStorage.getItem('user');
    if(user) {
      this.usuario = JSON.parse(user)
    }
  }
  enviarUsuario($event:Usuario) {
    this.mensajeOk=false
    this.service.updateUser(this.usuario.id, $event).pipe(

    catchError((e) => {
      console.log(e)
      this.mensajeError = e.error.message
      console.log(this.mensajeError)
      return EMPTY
    })  
    ).subscribe(data => {
      console.log(data)
      localStorage.setItem('user', JSON.stringify(data))
      this.mensajeOk=true
    })
  }


}
