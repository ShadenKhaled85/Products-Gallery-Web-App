import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input({required: true}) product!: Product;

  constructor(private router: Router){}

  onShowPrdDetails(){
    this.router.navigate([`/product/${this.product.id.toString()}`]);
  }
}
