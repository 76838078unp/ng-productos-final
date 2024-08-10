import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit{
  listProductos : ProductoModel[] = []
  constructor(
    private productoService: ProductoService
  ){

  }

  ngOnInit(): void {
    this.productoService.getProductosAll().subscribe(
      res => {
        if (res.error){
          alert(res.message)
        }else{
          this.listProductos = res.contenido
        }
      }
    )
  }

  
}
