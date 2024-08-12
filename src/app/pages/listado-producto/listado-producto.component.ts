import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/layouts/BaseComponent';
import { CategoriaModel, ProductoModel } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent extends BaseComponent implements OnInit {
  listProductos : ProductoModel[] = []
  categorias: CategoriaModel[] = []
  constructor(
    private productoService: ProductoService
  ){
    super()
    this.getCategorias()
    this.getProductos()
  }

  ngOnInit(): void {
   
  }

  getProductos(){
    this.productoService.getProductosAll().subscribe(
      res => {
        if (res.error){
          this.showAlertError(res.message)
        }else{
          this.listProductos = res.contenido
        }
      }
    )
  }

  getCategorias(){
    this.productoService.getCategoriasAll().subscribe(
      res => {
        if (res.error){
          this.showAlertError(res.message)
        }else{
          this.categorias = res.contenido
          
        }
      }
    )

  }

  
}
