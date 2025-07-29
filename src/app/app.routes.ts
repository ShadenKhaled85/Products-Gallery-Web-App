import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { BlankComponent } from './Layouts/blank/blank/blank.component';
import { CartComponent } from './Components/cart/cart.component';
import { AuthComponent } from './Layouts/auth/auth/auth.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [

    {path: '', redirectTo: 'home',pathMatch:'full'},

    {path:'', component: BlankComponent, title: 'Blank', children: [
    {path: 'home', component: HomeComponent , title: 'Home'},
      {path: 'cart', component: CartComponent  , title: 'Cart'},
      {path: 'products', component: ProductsListComponent , title: 'Products'},
      {path: 'product/:pid', component: ProductDetailsComponent, title:'Product Details'},
  ]},

  {path:'', component: AuthComponent, title: 'Auth', children: [
    {path: 'login', component: LoginComponent , title: 'Login'},
    {path: '**', component: NotFoundComponent , title: 'Not Found !!!'}
  ]},
];
