import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductoDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ProductoDetailComponent
  ]
})
export class ComponentsModule { }
