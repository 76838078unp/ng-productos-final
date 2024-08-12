import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/layouts/BaseComponent';
import { MovimientoModel } from 'src/app/models/movimiento.model';
import { ProductoModel } from 'src/app/models/producto.model';
import { MovimientoService } from 'src/app/services/movimiento.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-salida-producto',
  templateUrl: './salida-producto.component.html',
  styleUrls: ['./salida-producto.component.css']
})
export class SalidaProductoComponent extends BaseComponent{
  formSalida: FormGroup;
  productoId: number = 0
  producto?: ProductoModel
  constructor(
    private route: ActivatedRoute,
    private movimientoService: MovimientoService,
    private productoService: ProductoService,
    private router: Router
  ){
    super()
    this.formSalida = new FormGroup({
      cantidad: new FormControl('', [Validators.required]),
      precio_venta: new FormControl('', [Validators.required])
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

  saveSalida(){
    if(this.formSalida.invalid){
      this.showAlertError('Formulario invalido')
      return
    }
    let ingreso = this.formSalida.value as MovimientoModel
    ingreso.id_operacion  = 2
    ingreso.id_producto = this.productoId
    ingreso.precio_compra = 0

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
