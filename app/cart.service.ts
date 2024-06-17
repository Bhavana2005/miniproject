import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];
  cartUpdated = new EventEmitter<number>(); // EventEmitter to notify when cart is updated

  constructor() { }

  addToCart(product: any) {
    this.items.push(product);
    this.cartUpdated.emit(this.items.length); // Emit the new cart size
  }

  getItems() {
    return this.items;
  }

  removeItem(product: any) {
    const index = this.items.indexOf(product);
    if (index > -1) {
      this.items.splice(index, 1);
      this.cartUpdated.emit(this.items.length); // Emit the new cart size
    }
  }

  clearCart() {
    this.items = [];
    this.cartUpdated.emit(this.items.length); // Emit the new cart size
  }
}
