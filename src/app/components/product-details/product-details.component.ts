import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { Album, AlbumVersion } from '../../models/album.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  album: Album | undefined;
  
  // Current view state
  selectedVersion: AlbumVersion | null = null;
  currentImage: string = '';
  currentPrice: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Fix: Using Number() instead of + for clarity
    this.productsService.getAlbumById(id).subscribe(album => {
      this.album = album;
      if (this.album) {
        // Initialize with default values
        this.currentImage = this.album.imageUrl;
        this.currentPrice = this.album.price;
        
        // Do NOT auto-select version. Let user choose.
        this.selectedVersion = null;
      }
    });
  }

  selectVersion(version: AlbumVersion): void {
    // If clicking the same version again, deselect it
    if (this.selectedVersion === version) {
      this.selectedVersion = null;
      this.currentImage = this.album!.imageUrl; // Revert to default
      this.currentPrice = this.album!.price;    // Revert to default
      return;
    }

    this.selectedVersion = version;
    
    // Update image if version has specific image
    if (version.imageUrl) {
      this.currentImage = version.imageUrl;
    } else {
      this.currentImage = this.album!.imageUrl;
    }

    // Update price if version has specific price
    if (version.price) {
      this.currentPrice = version.price;
    } else {
      this.currentPrice = this.album!.price;
    }
  }

  selectRandom(): void {
    const randomVersion: AlbumVersion = {
      name: 'RANDOM 🎲',
      price: this.album!.price
      // No specific image, keep default
    };

    if (this.selectedVersion?.name === randomVersion.name) {
      this.selectedVersion = null;
      this.currentImage = this.album!.imageUrl;
      this.currentPrice = this.album!.price;
      return;
    }

    this.selectedVersion = randomVersion;
    this.currentImage = this.album!.imageUrl; // Keep main image for surprise
    this.currentPrice = this.album!.price;
  }

  addToCart(): void {
    if (this.album && this.selectedVersion) {
      // Create a copy of the album with the correct price and version for the cart
      const albumToAdd = { 
        ...this.album, 
        selectedVersion: this.selectedVersion.name,
        price: this.currentPrice,
        imageUrl: this.currentImage 
      };
      
      this.cartService.addItem(albumToAdd);
      
      Swal.fire({
        title: '💿 Adicionado!',
        text: `Você adicionou "${this.album.title}" (${this.selectedVersion.name}) ao carrinho.`,
        imageUrl: 'assets/images/tokki.png',
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Tokki',
        confirmButtonText: 'Continuar Comprando'
      });
    }
  }

  addSetToCart(): void {
    if (this.album && this.album.versions) {
      // Add ALL versions to cart
      let addedCount = 0;
      this.album.versions.forEach(version => {
        const item = {
          ...this.album!,
          selectedVersion: version.name,
          // Use version specific props if exist, else album defaults
          price: version.price || this.album!.price, 
          imageUrl: version.imageUrl || this.album!.imageUrl
        };
        this.cartService.addItem(item);
        addedCount++;
      });

      Swal.fire({
        title: '📦 SET Completo!',
        text: `Você adicionou o SET completo (${addedCount} álbuns) ao carrinho!`,
        icon: 'success',
        confirmButtonText: 'Show!',
        confirmButtonColor: '#0058F9' 
      });
    }
  }
}
