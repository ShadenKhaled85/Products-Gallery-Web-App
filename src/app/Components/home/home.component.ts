import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../../Models/Product';
import { ProductsApiService } from '../../Services/products-api.service';
import { CartService } from '../../Services/cart.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{


    myProducts : Product[] = [];

    private readonly productsService = inject(ProductsApiService)
    private readonly cartSer = inject(CartService)

        customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  mainSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true
  }

    callProducts(){
    this.productsService.getProducts().subscribe({
      next: (res)=> {
        this.myProducts = res
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    this.callProducts();
  }

    onAddToCart(product: Product){
    this.cartSer.AddToCart(product)
  }



}
