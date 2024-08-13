import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/layouts/BaseComponent';
import { CategoriaModel, ProductoModel } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent extends BaseComponent {
  productoForm: FormGroup;
  categorias: CategoriaModel[] = []

  constructor(
    private productoService: ProductoService,
    private router: Router
  ){
    super()
    this.productoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      id_categoria: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      precio_venta: new FormControl('', [Validators.required])
    })
    this.productoService.getCategoriasAll().subscribe(
      (res) => {
        if(res.error){
          this.showAlertError('Error al obtener las categorias')
          return
        }
        this.categorias = res.contenido
      }
    );
  }


  guardarProducto(){
    if(this.productoForm.invalid){
      this.showAlertError('Formulario invalido')
      return
    }
    let producto = this.productoForm.value as ProductoModel
    producto.stock = 0
    this.productoService.registrarProducto(producto).subscribe(
      (res) => {
        if(res.error){
          this.showAlertError(res.message)
          return
        }
        this.showAlertSuccess('Producto registrado correctamente')
        this.router.navigate(['/admin/products'])
      },
      err=>{
        this.showAlertError('Error al registrar el producto')
      }
    )
  }
}
