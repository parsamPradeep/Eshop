import { ProdutsService } from 'src/app/produts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent {
    products$;
    constructor(private productsService: ProdutsService){
      this.products$=productsService.getAll();
      console.log('At AdminProductsComponent ',this.products$)
    }
    func(p: any){
      console.log(p);
    }
}
