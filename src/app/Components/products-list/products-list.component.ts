import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from '../../Services/products-api.service';
import { Product } from '../../Models/Product';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {

  productsList!: Product[];
  productsListFiltered!: Product[];
  isProductsSortedByPriceDesc: boolean = false;
  isProductsSortedByNameDesc: boolean = false;

  constructor(private prdSer: ProductsApiService ){}

  ngOnInit(){
    this.prdSer.getProducts().subscribe({
      next: (data)=>{
        this.productsList = data
        this.productsListFiltered= this.productsList
      }
    })
  }

  onProductSearch(e: Event){
  this.productsListFiltered = this.productsList;
  const input =  (e.target as HTMLInputElement).value.toString().toLowerCase();
  this.productsListFiltered = this.productsListFiltered.filter(row => row.title.toLowerCase().includes(input))
  }

onSortByPrice(sortType: string) {
  if(sortType === 'asc'){
    // Sort Ascending
    this.productsListFiltered.sort((a, b) => a.price - b.price);
  }
  else{
    // Sort Descending
  this.productsListFiltered.sort((a, b) => b.price - a.price);
  }

  this.isProductsSortedByPriceDesc = !this.isProductsSortedByPriceDesc
}

onSortByName() {
  if (this.isProductsSortedByNameDesc) {
    // Sort Ascending (A–Z)
    this.productsListFiltered.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    // Sort Descending (Z–A)
    this.productsListFiltered.sort((a, b) => b.title.localeCompare(a.title));
  }

  this.isProductsSortedByNameDesc = !this.isProductsSortedByNameDesc;
}


}
