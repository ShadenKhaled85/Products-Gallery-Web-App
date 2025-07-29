import { initFlowbite } from 'flowbite';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FlowbiteService } from '../../Services/flowbite/flowbite.service';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  constructor(private flowbiteService: FlowbiteService,
    private CartService: CartService,
    private router: Router) {}

  @Input({required:true })isLoggedIn!: boolean;

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }

  onLogOut(){
    this.CartService.emptyCart();
    this.isLoggedIn = false;
    this.router.navigate(['/home'])
  }
}

