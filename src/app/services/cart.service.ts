import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Album } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Album[] = [];
  private itemsSubject = new BehaviorSubject<Album[]>(this.items);

  constructor() {
    const storedItems = localStorage.getItem('carrinho');
    if (storedItems) {
    this.items = JSON.parse(storedItems);
    this.itemsSubject.next(this.items);
    }
  }

  private atualizarLocalStorage(): void {
    localStorage.setItem('carrinho', JSON.stringify(this.items));
    this.itemsSubject.next(this.items); // atualiza o observable
  }
  items$ = this.itemsSubject.asObservable();

  addItem(item: Album) {
    const existing = this.items.find(i => i.id === item.id);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      item.quantity = 1;
      this.items.push(item);
    }
    this.atualizarLocalStorage();
    this.itemsSubject.next(this.items); // 🔁 atualiza observadores
  }

  getItems(): Album[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.itemsSubject.next(this.items);
    this.atualizarLocalStorage();
  }

  removeItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
    this.itemsSubject.next(this.items);
    this.atualizarLocalStorage();
  }

  updateItem(updated: Album): void {
  const index = this.items.findIndex(i => i.id === updated.id);
  if (index !== -1) {
    this.items[index] = { ...updated };
    this.atualizarLocalStorage(); // atualiza observable e localStorage
  }
}
}
