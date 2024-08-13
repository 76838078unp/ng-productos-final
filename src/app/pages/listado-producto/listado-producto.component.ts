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
          this.getProductos()
        }
      }
    )

  }

  eliminar(id: number){
    this.questionAlert('¿Está seguro que desea eliminar el producto?').then(
      (result) => {
        if(result.isConfirmed){
          this.productoService.eliminarProducto(id).subscribe(
            res => {
              if (res.error){
                this.showAlertError(res.message)
              }else{
                this.getProductos()
                this.showAlertSuccess('Producto eliminado')
              } 
            }
          )
        }
      }
    )
    
  }

  getNameCategory(id: number){
    let categoria = this.categorias.find(c => c.id_categoria == id)
    return categoria?.categoria
  }
  
}
