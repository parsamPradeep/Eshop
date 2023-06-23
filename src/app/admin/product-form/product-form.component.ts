import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { ProdutsService } from 'src/app/produts.service';
import {take} from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  categories$;
  product:any={};
  id;
    constructor(
       private categoryService: CategoryService,
       private productService: ProdutsService,
       private router: Router,
       private route: ActivatedRoute){
      this.categories$=categoryService.getCategories();
      this.id= this.route.snapshot.paramMap.get('id');
      if (this.id) { this.productService.getProduct(this.id).pipe(take(1)).subscribe(p => {
        
        let obj = {...p.val};
        this.product = obj}); }
    }

    save(product: any){
      if(this.id) this.productService.update(this.id, product)
      else this.productService.create(product);
      this.router.navigate(['/admin/products']);
    }
    delete() {
      if (this.id && confirm('Are you sure you want to delete this product?')) {
        this.productService.delete(this.id);
        this.router.navigate(['/admin/products']);
      }
    }
}
