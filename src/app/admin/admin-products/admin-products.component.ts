import { ProdutsService } from 'src/app/produts.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnDestroy{
    products:any=[];
    filteredProducts: any=[];
    subscription: Subscription;
    constructor(private productsService: ProdutsService){
      this.subscription = productsService.getAll().subscribe(p => {this.filteredProducts=this.products=p; console.log(p)});
    }
  
    ngOnDestroy(): void {
     this.subscription.unsubscribe();
    }
    
    filter(query: any){
      console.log(query)
      if(query){
        this.filteredProducts=this.products.filter((p:any) => p.val.title.toLowerCase().includes(query.toLowerCase()));
      }else{
        this.filteredProducts=this.products;
      }
    }


}
