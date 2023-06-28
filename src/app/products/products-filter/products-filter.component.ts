import { Component, Input } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent {
  categories;
  @Input('category') category: any;
  constructor( private categoryService: CategoryService){
    this.categories=categoryService.getAll();
  }
}
