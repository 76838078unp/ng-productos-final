import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/layouts/BaseComponent';
import { MovimientoModel } from 'src/app/models/movimiento.model';
import { ProductoModel } from 'src/app/models/producto.model';
import { MovimientoService } from 'src/app/services/movimiento.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-ingreso-producto',
  templateUrl: './ingreso-producto.component.html',
  styleUrls: ['./ingreso-producto.component.css']
})
export class IngresoProductoComponent extends BaseComponent{

  formIngreso: FormGroup;
  productoId: number = 0
  producto?: ProductoModel
  constructor(
    private route: ActivatedRoute,
    private movimientoService: MovimientoService,
    private productoService: ProductoService,
    private router: Router
  ){
    super()
    this.formIngreso = new FormGroup({
      cantidad: new FormControl('', [Validators.required]),
      precio_compra: new FormControl('', [Validators.required])
    })
    this.route.params.subscribe(
      (params) => {
        this.productoId = params['id']
        this.getProducto()
      }
    )
  }

  getProducto(){
    this.productoService.getProductosAll().subscribe(
      (res) => {
        if(res.error){
          this.showAlertError(res.message)
          return
        }
        let productoData = res.contenido
        this.producto = productoData.find((producto) => producto.id_producto == this.productoId)
      },
      err => {
        this.showAlertError('Error al obtener el producto')
      }
    )
  }

  saveIngreso(){
    if(this.formIngreso.invalid){
      this.showAlertError('Formulario invalido')
      return
    }
    let ingreso = this.formIngreso.value as MovimientoModel
    ingreso.id_operacion  = 1
    ingreso.id_producto = this.productoId
    ingreso.precio_venta = 0

    this.movimientoService.registrarMovimiento(ingreso).subscribe(
      (res) => {
        if(res.error){
          this.showAlertError(res.message)
          return
        }
        this.showAlertSuccess('Ingreso registrado correctamente')
        this.router.navigate(['/admin/products'])
      },
      err=>{
        this.showAlertError('Error al registrar el ingreso')
      }
    );
  }
}
