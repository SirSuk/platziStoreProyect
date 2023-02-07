import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioProductosService } from '../services/servicio-productos.service';
import { Producto } from '../inerfaces/producto';

@Component({
  selector: 'app-ficha-producto',
  templateUrl: './ficha-producto.component.html',
  styleUrls: ['./ficha-producto.component.css']
})
export class FichaProductoComponent {
  producto!: Producto;
  constructor(private ActivatedRoute: ActivatedRoute,
              private service: ServicioProductosService) {

  }
  ngOnInit() {
    this.ActivatedRoute.queryParams.subscribe(queryParams => {
      const idProducto: number = parseInt(queryParams['idproducto'])
      this.service.getSingleProduct(idProducto).subscribe(data => {
        this.producto = data
      })
    })
  }
}
