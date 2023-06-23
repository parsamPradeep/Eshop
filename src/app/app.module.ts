import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSucessComponent } from './order-sucess/order-sucess.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './users.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProdutsService } from './produts.service';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomepageComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSucessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component:HomepageComponent},
      {path:'products', component: ProductsComponent},
      {path:'shopping-cart', component: ShoppingCartComponent},
      {path:'login', component: LoginComponent},

      {path:'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
      {path:'my/order', component: MyOrderComponent, canActivate: [AuthGuardService]},
      {path:'order-success', component: OrderSucessComponent, canActivate: [AuthGuardService]},
      
      {path:'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuard]},
      {path:'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuard]},
      {path:'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuard]},
      {path:'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuard]},
    ]),
    NgbModule
  ],
  providers: [
              AuthService,
              AuthGuardService, 
              AdminAuthGuard,
              UserService,
              CategoryService,
              ProdutsService,
            ],
  bootstrap: [AppComponent],
})
export class AppModule { }
