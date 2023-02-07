import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filtro, Producto } from '../inerfaces/producto';
import { ServicioProductosService } from '../services/servicio-productos.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent {

  listadoProductos!: Producto[]
  categoria:number=0

  constructor(private ActivatedRoute: ActivatedRoute,
              private service: ServicioProductosService ){}

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(param => {
        this.categoria= parseInt(param['idCategoria'])
        this.suscribeProducts(this.categoria)
      })
    
  }


  handleFilter($event:Filtro) {
    if($event.preMin && $event.preMax){
      this.subscribeProductsByFilter($event, this.categoria)
    } else {
      this.suscribeProducts(this.categoria)
    }
  }

    private suscribeProducts(categoria:number) {
      this.service.getProductsByCategories(categoria).subscribe(data => {
        this.listadoProductos = data
    })
  }

    private subscribeProductsByFilter($event: Filtro, categoria:number) {
      this.service.getProductsByFilter(categoria, $event).subscribe(data => {
        this.listadoProductos = data
    })  
 }

}