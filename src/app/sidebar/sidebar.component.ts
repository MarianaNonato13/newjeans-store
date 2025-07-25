import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  totalItems: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.items$.subscribe(items => {
      this.totalItems = items.reduce((sum, item) => sum + (item.quantity || 1), 0);
    });
  }

  updateCartCount(): void {
    const items = this.cartService.getItems();
    this.totalItems = items.reduce((sum, item) => sum + (item.quantity || 1), 0);
  }

  toggleCarrinho(): void {
    if (this.router.url === '/carrinho') {
      this.router.navigate(['/produtos']);
    } else {
      this.router.navigate(['/carrinho']);
    }
  }
}

