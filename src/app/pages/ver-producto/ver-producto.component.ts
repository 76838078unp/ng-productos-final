import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovimientoModel } from 'src/app/models/movimiento.model';
import { ProductoModel } from 'src/app/models/producto.model';
import { MovimientoService } from 'src/app/services/movimiento.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent {
  movimientos : MovimientoModel[] = []	
  productoId: number = 0
  producto?: ProductoModel 
  constructor(
    private route: ActivatedRoute,
    private movimientoService: MovimientoService,
    private productoService: ProductoService
  ){
    this.route.params.subscribe(
      (params) => {
        this.productoId = params['id']
        this.getMovimientos()
        this.getProducto()
      }
    )
  }

  getProducto(){
    this.productoService.getProductosAll().subscribe(
      (res) => {
        if(res.error){
          alert('Error al obtener el producto')
          return
        }
        let data_productos = res.contenido
        this.producto = data_productos.find((producto) => producto.id_producto == this.productoId)
      }
    );
  }

  getMovimientos(){
    this.movimientoService.getMovimientosAll().subscribe(
      (res) => {
        if(res.error){
          alert('Error al obtener los movimientos')
          return
        }
        let data_movimientos = res.contenido
        this.movimientos = data_movimientos.filter((movimiento) => movimiento.id_producto == this.productoId)
      }
    );
  }

}
