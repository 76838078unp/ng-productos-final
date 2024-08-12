import { Component, Input } from '@angular/core';
import { ProductoModel } from 'src/app/models/producto.model';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent {

  @Input() producto?: ProductoModel

}
