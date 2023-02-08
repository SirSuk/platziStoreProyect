import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../inerfaces/usuario';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  role:string = ''

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const user = localStorage.getItem('user')
    if(user) {
      const infoUser:Usuario = JSON.parse(user)
        this.role=infoUser.role
    }
  }

//   cerrarSesion(){
//     localStorage.removeItem('token')
//     localStorage.removeItem('user')
//     this.role = ""
//     this.router.navigate(['/home'])

//   }
 }
