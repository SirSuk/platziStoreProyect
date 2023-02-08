import { Component } from '@angular/core';
import { Usuario } from '../inerfaces/usuario';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  usuario!: Usuario;

  constructor(){}

  ngOnInit():void {
    const user = localStorage.getItem('user');
    if(user) {
      this.usuario = JSON.parse(user)
    }
  }
}
