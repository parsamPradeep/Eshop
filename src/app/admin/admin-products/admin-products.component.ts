import { ProdutsService } from 'src/app/produts.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/models/products';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnDestroy{
    products: Products[] = [];
    filteredProducts: any=[];
    rows: Products[] = [];
    subscription: Subscription;
    force=ColumnMode.force;
    constructor(private productsService: ProdutsService){
      this.subscription = productsService.getAll().subscribe(p => {this.rows=this.products=p; console.log(p)});
    }
  
    ngOnDestroy(): void {
     this.subscription.unsubscribe();
    }
    
    filter(query: any){
      console.log(query)
      if(query){
        this.rows=this.products && this.products.filter((p:any) => p.title.toLowerCase().includes(query.toLowerCase()));
      }else{
        this.rows=this.products;
      }
    }


}
