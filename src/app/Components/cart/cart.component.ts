import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { CartItem } from '../../Models/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartItems!: CartItem[];
  constructor(private cartSer: CartService){}

  ngOnInit(){
    console.log(this.cartSer.getCartItems);
    this.cartSer.getCartItems$().subscribe(items => {
      this.cartItems = items;
    });
  }

  increaseCount(productId: number) {
  this.cartSer.increaseCount(productId)
}

decreaseCount(productId: number) {
  this.cartSer.decreaseCount(productId)
}

}
