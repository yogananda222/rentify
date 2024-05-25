import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Food } from '../core/model/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Food[] = [];
  
  private cartSubject = new BehaviorSubject<Food[]>([]);

  private totalAmountSubject = new BehaviorSubject<number>(0);

  constructor() { }

  addToCart(item: Food) {
    const existingItem = this.cartItems.find(i => i.foodId === item.foodId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
    this.updateCart();
  }

  updateCartItem(updatedItem: Food) {
    const index = this.cartItems.findIndex(item => item.foodId === updatedItem.foodId);
    if (index !== -1) {
      this.cartItems[index] = updatedItem;
      this.updateCart();
    }
  }


  removeCartItem(itemToRemove: Food) {
    this.cartItems = this.cartItems.filter(item => item.foodId !== itemToRemove.foodId);
    this.updateCart();
  }

  clearCart() {
    this.cartItems = [];
    this.updateCart();
  }

  getCartItems() {
    return this.cartSubject.asObservable();
  }

  getTotalAmount() {
    return this.totalAmountSubject.asObservable();
  }

  private updateCart() {
    this.cartSubject.next([...this.cartItems]);
    const totalAmount = this.cartItems.reduce((total, item) => total + (parseFloat(item.foodPrice) * item.quantity), 0);
    const formattedTotal = totalAmount.toFixed(2);
    this.totalAmountSubject.next(totalAmount);
  }
}