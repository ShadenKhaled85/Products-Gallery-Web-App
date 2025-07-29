import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductsApiService } from '../../Services/products-api.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  productDetails!: Product;
  productId!: string;

  constructor(private prdSer: ProductsApiService ,
    private activatedRoute: ActivatedRoute,
    private cartSer: CartService
  ){}

  ngOnInit(){
    this.productId = this.activatedRoute.snapshot.paramMap.get('pid')!

    this.prdSer.getProductDetails(this.productId).subscribe({
      next: (data)=>{
        this.productDetails = data
      }
    })
  }

  onAddToCart(){
    this.cartSer.AddToCart(this.productDetails)
  }
}
