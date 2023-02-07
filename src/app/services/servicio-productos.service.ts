import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria, Filtro, Producto } from '../inerfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService {

  urlBase = 'https://api.escuelajs.co/api/v1/'

  constructor(private http: HttpClient) { 

  }

  ngOnInit(){}


  getCategories(){
    return this.http.get<Categoria[]>(this.urlBase + 'categories/')
  }

  getProductsByCategories(idCategoria:number){
    return this.http.get<Producto[]>(this.urlBase + 'categories/' +idCategoria + '/products')
  }

  getProductsByFilter(cat:number, datosFiltro: Filtro){
    return this.http.get<Producto[]>(this.urlBase + 'products?price_min='+ datosFiltro.preMin + '&price_max='+ datosFiltro.preMax + '&categoryId=' + cat) 
  }

  getSingleProduct(id:number){
    return this.http.get<Producto>(this.urlBase + 'products/'+ id)  //https://api.escuelajs.co/api/v1/products/4


  }
}


