import { ProdutsService } from 'src/app/produts.service';
import {Component, OnDestroy, AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


import { Subscription } from 'rxjs';
import { Products } from 'src/app/models/products';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnDestroy, AfterViewInit {
    products: Products[] = [];
    filteredProducts: any=[];
    rows: Products[] = [];
    subscription: Subscription;
    force=ColumnMode.force;

    displayedColumns: string[] = ['title', 'category', 'price', 'key'];
    dataSource!: MatTableDataSource<Products[]>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private productsService: ProdutsService){
      this.subscription = productsService.getAll().subscribe(p => {this.rows=this.products=p; this.dataSource = new MatTableDataSource(p);});
    }
  ngAfterViewInit(): void {
    if(this.dataSource){
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort;
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this!.dataSource!.filter = filterValue.trim().toLowerCase();

    if (this!.dataSource!.paginator) {
      this!.dataSource!.paginator.firstPage();
    }
  }
  
    ngOnDestroy(): void {
     this.subscription.unsubscribe();
    }
    
    // filter(query: any){
    //   console.log(query)
    //   if(query){
    //     this.rows=this.products && this.products.filter((p:any) => p.title.toLowerCase().includes(query.toLowerCase()));
    //   }else{
    //     this.rows=this.products;
    //   }
    // }


}
