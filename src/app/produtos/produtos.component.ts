import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { Album } from '../models/album.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {
  albums: Album[] = [];
  filteredAlbums: Album[] = [];
  filterCategory: string = 'all';

  constructor(private cartService: CartService, private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getAlbums().subscribe(data => {
      this.albums = data;
      this.filteredAlbums = data; // Initialize filtered list
    });
  }

  setFilter(category: string): void {
    this.filterCategory = category;
    if (category === 'all') {
      this.filteredAlbums = this.albums;
    } else if (category === 'get-up' || category === 'omg' || category === 'supernatural' || category === 'how-sweet' || category === 'newjeans') {
       // Filter by Title for Eras
       const searchTerm = category.replace('-', ' '); // 'get-up' -> 'get up'
       this.filteredAlbums = this.albums.filter(a => a.title.toLowerCase().includes(searchTerm));
    } else {
      // Filter by Category
      this.filteredAlbums = this.albums.filter(a => a.category === category);
    }
  }

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


