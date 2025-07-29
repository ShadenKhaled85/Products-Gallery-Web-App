import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { Router } from '@angular/router';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input({required: true}) product!: Product;

  constructor(private router: Router,
    private cartSer: CartService
  ){}

  onShowPrdDetails(){
    this.router.navigate([`/product/${this.product.id.toString()}`]);
  }

  onAddToCart(){
    this.cartSer.AddToCart(this.product)
  }
}
