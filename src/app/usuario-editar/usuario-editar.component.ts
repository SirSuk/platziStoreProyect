import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../inerfaces/usuario';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent {
  mensajeError: string = '';
  mensajeOk:boolean = false
  usuario!: Usuario
  constructor(private acRouter: ActivatedRoute,
              private userService: UsuariosService){

  }
  ngOnInit() {

    this.acRouter.queryParams.subscribe(params => {
      this.userService.getUser(parseInt(params['usuario'])).subscribe(data => {
        this.usuario = data
        console.log(data)
      })
    })
  }
  enviarUsuario($event:any){
    this.userService.updateUser(this.usuario.id, $event).pipe(
      catchError((e)=> {
        this.mensajeError = e.error.message;
        this.mensajeOk=false
        return EMPTY
      })
    )
    .subscribe(data => {
      console.log(data)
    })
  }


}
