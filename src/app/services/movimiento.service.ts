import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ApiResModel } from '../models/helper.model';
import { MovimientoModel } from '../models/movimiento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {
  url = environment.API_URL + '?apicall='
  constructor(
    private httpClient: HttpClient
  ) { }

  getMovimientosAll(): Observable<ApiResModel<MovimientoModel[]>>{
    return this.httpClient.get<ApiResModel<MovimientoModel[]>>(this.url + 'verMovimientos')
  }
}
