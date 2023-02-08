import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuario-eliminar',
  templateUrl: './usuario-eliminar.component.html',
  styleUrls: ['./usuario-eliminar.component.css']
})
export class UsuarioEliminarComponent {
  idUsuario!: number
  mensajeError: string = '';
  mensajeOk:boolean = false


  constructor(private acRouter: ActivatedRoute,
              private router: Router,
              private userService: UsuariosService){

  }
  ngOnInit() {

    this.acRouter.queryParams.subscribe(params => {
      this.idUsuario = parseInt(params['usuario'])
    })
  }

  eliminarUsuario(){
    this.userService.deleteUser(this.idUsuario).subscribe(data => {
      this.mensajeOk = true
      setTimeout(() => {
        this.router.navigate(['/gestion-usuarios'])
    
      },2000)
    })
  }
}
