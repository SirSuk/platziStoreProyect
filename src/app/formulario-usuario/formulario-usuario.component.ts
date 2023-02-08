import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Usuario } from '../inerfaces/usuario';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent {

  form!:FormGroup
  @Input() datos!:Usuario
  @Output() enviarUsuario: EventEmitter<Usuario>
  @Input() roleDisabled:boolean = true
  @Input() textoBoton: string = 'Modificar'

  constructor(){
    this.enviarUsuario= new EventEmitter()
  }

  ngOnInit():void {

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl({value:'', disabled:this.roleDisabled}),
      avatar: new FormControl('',)
  },[])
  
  this.form.patchValue(this.datos)
 
  
  }

  onSubmit(){
   this.enviarUsuario.emit(this.form.value)
  }
}
