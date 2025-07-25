import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Album } from '../models/album.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: Album[] = [];

  constructor(private cartService: CartService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.cartService.items$.subscribe(items => {
      this.items = items;
    });
  }

  removeItem(id: number): void {
    const item = this.items.find(album => album.id === id); // busca o item pelo id

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { nomeDoAlbum: item?.title }
    });

    dialogRef.afterClosed().subscribe(confirmado => {
      if (confirmado) {
        this.cartService.removeItem(id);
      }
    });
  }


  getTotal(): number {
    return this.items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  }

  clearCart(): void {
    this.cartService.clearCart(); // o subscribe vai limpar a lista
  }
  aumentarQuantidade(item: Album): void {
  item.quantity = (item.quantity || 1) + 1;
  this.cartService.updateItem(item); // atualiza no serviço
}

  diminuirQuantidade(item: Album): void {
    if ((item.quantity || 1) > 1) {
      item.quantity = item.quantity! - 1;
      this.cartService.updateItem(item);
    }
  }
}
