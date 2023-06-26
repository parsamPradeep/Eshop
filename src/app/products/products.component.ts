import { CategoryService } from './../category.service';
import { Component } from '@angular/core';
import { ProdutsService } from '../produts.service';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Products[]=[];
  filterdProducts: Products[]=[];
  categories;
  category: string | null | undefined;
  constructor(private  route: ActivatedRoute, private productService: ProdutsService, private categoryService: CategoryService){
     productService.getAll().subscribe(p => {
      this.products=p;
      route.queryParamMap.subscribe(params => {
        this.category=params.get('category');
  
        this.filterdProducts=(this.category) ?
        this.products.filter(p =>
          p.category.toLocaleLowerCase()==this.category?.toLocaleLowerCase()
          ):
        this.products;
       });
     });
     this.categories=categoryService.getAll();
     
  }
}
