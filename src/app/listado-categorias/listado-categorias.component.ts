import { Component } from '@angular/core';
import { ServicioProductosService } from '../services/servicio-productos.service';
import { Categoria } from '../inerfaces/producto';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css']
})
export class ListadoCategoriasComponent {

  categorias!: Categoria[]

  constructor(private servicio: ServicioProductosService){}

  ngOnInit():void {
    this.servicio.getCategories().subscribe(datos => {
      this.categorias = datos;
    })
  }
}
