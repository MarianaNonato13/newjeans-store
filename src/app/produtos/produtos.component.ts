import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Album } from '../models/album.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {
  albums: Album[] = [
    { id: 1, title: '1st EP NEWJEANS (Bluebook Ver.)', price: 193.00, imageUrl: 'assets/images/bluebook-ver.png' },
    { id: 2, title: '2nd EP GET UP (Bunny Beach Bag Ver.)', price: 195.00, imageUrl: 'assets/images/bunny-beach-bag-ver.png' },
    { id: 3, title: '2nd EP GET UP (NJ Box Ver.)', price: 165.00, imageUrl: 'assets/images/nj-box-ver.png' },
    { id: 4, title: '2nd EP GET UP (Weverse Album Ver.)', price: 47.00, imageUrl: 'assets/images/weverse-album-ver-getup.png' },
    { id: 5, title: 'OMG (Weverse Album Ver.)', price: 47.00, imageUrl: 'assets/images/weverse-album-ver-omg.png' }
  ];

  constructor(private cartService: CartService) {}

    addToCart(album: Album): void {
    this.cartService.addItem(album);
    Swal.fire({
      title: '💿 Álbum adicionado!',
      text: `O álbum "${album.title}" foi adicionado ao carrinho com sucesso  🛒`,
      imageUrl: 'assets/images/tokki.png',
      imageWidth: 120,
      imageHeight: 120,
      imageAlt: 'Tokki Bunny',
      confirmButtonText: 'Fechar'
    });
}
}


