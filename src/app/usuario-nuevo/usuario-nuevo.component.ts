import { Component } from '@angular/core';
import { Usuario } from '../inerfaces/usuario';
import { UsuariosService } from '../services/usuarios.service';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css']
})
export class UsuarioNuevoComponent {
  mensajeError: string = '';
  mensajeOk:boolean = false

  constructor(private usuarioService: UsuariosService){}


  enviarUsuario($event: any){
    this.usuarioService.createUser($event).pipe(
      catchError((e)=> {
        this.mensajeError = e.error.message;
        this.mensajeOk=false
        return EMPTY
      })
    ).subscribe(data => {
      console.log(data)
      this.mensajeOk = true
      this.mensajeError = ""
    })
  }
}
