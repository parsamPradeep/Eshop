import { Component, Input } from '@angular/core';
import { Products } from '../models/products';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input('product') product: Products | undefined;
  @Input('show-action') showAction: boolean=true;

}
