import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResModel } from '../models/helper.model';
import { CategoriaModel, ProductoModel } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = environment.API_URL + '?apicall='

  constructor(
    private httpClient: HttpClient
  ) { }

  getProductosAll(): Observable<ApiResModel<ProductoModel[]>>{
    return this.httpClient.get<ApiResModel<ProductoModel[]>>(this.url + 'verproductos')
  }

  getCategoriasAll(): Observable<ApiResModel<CategoriaModel[]>>{
    return this.httpClient.get<ApiResModel<CategoriaModel[]>>(this.url + 'verCategorias')
  }

  registrarProducto(data: ProductoModel): Observable<ApiResModel<ProductoModel>>{
    return this.httpClient.post<ApiResModel<ProductoModel>>(this.url + 'grabaProducto', data)
  }

}


/*
entrada - 1
salida - 2

*/