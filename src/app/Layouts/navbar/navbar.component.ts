import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from '../../Services/flowbite/flowbite.service';
import { CartService } from '../../Services/cart.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  isUserLogged = false;
  private authSub!: Subscription;

  constructor(
    private flowbiteService: FlowbiteService,
    private CartService: CartService,
    private router: Router,
    private authSer: AuthService
  ) {}

  ngOnInit(): void {

    this.authSub = this.authSer.isUserLogged$.subscribe(status => {
      this.isUserLogged = status;
    });

    this.flowbiteService.loadFlowbite(() => {
      initFlowbite();
    });
  }

  onLogOut() {
    this.CartService.emptyCart();
    this.authSer.setLoginStatus(false);
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    if (this.authSub) this.authSub.unsubscribe();
  }

}
