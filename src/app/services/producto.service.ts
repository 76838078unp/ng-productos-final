import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResModel } from '../models/helper.model';
import { ProductoModel } from '../models/producto.model';

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
  
}
