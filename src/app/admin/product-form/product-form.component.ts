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
    constructor(
       private categoryService: CategoryService,
       private productService: ProdutsService,
       private router: Router,
       private route: ActivatedRoute){
      this.categories$=categoryService.getCategories();
      let id= this.route.snapshot.paramMap.get('id');
      if (id) { this.productService.getProduct(id).pipe(take(1)).subscribe(p => {
        
        let obj = {...p.val};
        this.product = obj}); }
    }

    save(product: any){
      this.productService.create(product);
      this.router.navigate(['/admin/products']);
    }
}
