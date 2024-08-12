import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ListadoProductoComponent } from './pages/listado-producto/listado-producto.component';
import { IngresoProductoComponent } from './pages/ingreso-producto/ingreso-producto.component';
import { SalidaProductoComponent } from './pages/salida-producto/salida-producto.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from './layouts/layouts.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from "./components/components.module";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoProductoComponent,
    IngresoProductoComponent,
    SalidaProductoComponent,
    AgregarProductoComponent,
    VerProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LayoutsModule,
    HttpClientModule,
    ComponentsModule,
    SweetAlert2Module.forRoot()
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
