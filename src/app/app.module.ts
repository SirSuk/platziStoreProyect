import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListadoCategoriasComponent } from './listado-categorias/listado-categorias.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FichaProductoComponent } from './ficha-producto/ficha-producto.component';
import { FiltroPrecioComponent } from './filtro-precio/filtro-precio.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { registerLocaleData } from '@angular/common';
import  localeEs  from '@angular/common/locales/es'

registerLocaleData(localeEs, 'es')

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListadoCategoriasComponent,
    ListadoProductosComponent,
    FichaProductoComponent,
    FiltroPrecioComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
