import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../Models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[]= [];
  private cartItemsSubject = new BehaviorSubject<CartItem[]>(this.cartItems);
  constructor() { }

  getCartItems$() {
      return this.cartItemsSubject.asObservable();
    }

  private updateCartItems() {
    this.cartItemsSubject.next([...this.cartItems]);
  }

  get getCartItems(){
    return this.cartItems
    }



  AddToCart(product: Product) {
    const existingCartItem = this.cartItems.find(row => row.product.id === product.id);

    if (existingCartItem) {
      existingCartItem.count++;
    } else {
      this.cartItems.push({ product, count: 1 });
    }
        this.updateCartItems();
  }

  emptyCart(){
    this.cartItems = []
    this.updateCartItems();
  }
  increaseCount(productId: number) {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (item) item.count++;
        this.updateCartItems();
  }

  decreaseCount(productId: number) {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (item && item.count > 1) item.count--;

    else if (item && item.count === 1) {
      this.cartItems = this.cartItems.filter(i => i.product.id !== productId);
    }

        this.updateCartItems();
}}
