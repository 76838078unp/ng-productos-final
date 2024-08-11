import { Component } from '@angular/core';
import { MovimientoModel } from 'src/app/models/movimiento.model';
import { MovimientoService } from 'src/app/services/movimiento.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent {
  movimientos : MovimientoModel[] = []	
  constructor(
    private movimientoService: MovimientoService
  ){
    this.movimientoService.getMovimientosAll().subscribe(
      (res) => {
        if(res.error){
          alert('Error al obtener los movimientos')
          return
        }
        this.movimientos = res.contenido
      }
    );
  }

}
