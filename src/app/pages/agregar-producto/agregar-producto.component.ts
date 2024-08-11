import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaModel, ProductoModel } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  productoForm: FormGroup;
  categorias: CategoriaModel[] = []

  constructor(
    private productoService: ProductoService,
    private router: Router
  ){
    this.productoForm = new FormGroup({
      nombre: new FormControl(''),
      id_categoria: new FormControl(''),
      descripcion: new FormControl(''),
      precio_venta: new FormControl(''),
      stock: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.productoService.getCategoriasAll().subscribe(
      (res) => {
        if(res.error){
          alert('Error al obtener las categorias')
          return
        }
        this.categorias = res.contenido
      }
    );
  }

  guardarProducto(){
    if(this.productoForm.invalid){
      alert('Formulario invalido')
      return
    }
    let producto = this.productoForm.value as ProductoModel
    producto.stock = 0
    this.productoService.registrarProducto(producto).subscribe(
      (res) => {
        if(res.error){
          alert(res.message)
          return
        }
        alert('Producto registrado correctamente')
        this.router.navigate(['/admin/products'])
      },
      err=>{
        alert('Error al registrar el producto')
      }
    )
  }
}
