import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListadoCategoriasComponent } from './listado-categorias/listado-categorias.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FichaProductoComponent } from './ficha-producto/ficha-producto.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: ListadoCategoriasComponent},
  {path: 'productos/categoria/:idCategoria', component: ListadoProductosComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'producto/:producto', component: FichaProductoComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'home'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
