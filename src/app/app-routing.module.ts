import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutsModule } from './layouts/layouts.module';
import { ListadoProductoComponent } from './pages/listado-producto/listado-producto.component';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';
import { IngresoProductoComponent } from './pages/ingreso-producto/ingreso-producto.component';
import { SalidaProductoComponent } from './pages/salida-producto/salida-producto.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: LayoutsModule,
    children: [
      {
        path: 'products',
        component: ListadoProductoComponent
      },
      {
        path: 'products/create',
        component: AgregarProductoComponent
      },
      {
        path: 'products/ingreso/:id',
        component: IngresoProductoComponent
      },
      {
        path: 'products/salida/:id',
        component: SalidaProductoComponent
      },
      {
        path: 'products/:id',
        component: VerProductoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
