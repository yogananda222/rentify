import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Food } from '../../core/model/food';
import { CartService } from '../../services/cart.service';
import {  Router } from '@angular/router';
import { Order } from '../../core/model/order';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../core/model/user';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{



  cartItems: Food[] = [];
  totalAmount: number = 0;
  couponCode: string = '';
  firstName: string | undefined;
  lastName: string | undefined;
  address: string | undefined;
  city: string | undefined;
  zipcode: string | undefined;
  state: string | undefined;

  foods: Food[] = [];

  newFood: Food = {
    foodId: 0,
    foodName: '',
    foodImage:"",
    foodDescription: '',
    foodPrice: '',
    quantity: 0
  };

  user: User = {
    userId: 0, 
    username: "",
    userPassword: "",
    userContact: 0,
    userEmail:""
  
  }
  
  cartItem: { foodId: number, quantity: number }[] = [];


  constructor(private cartService: CartService, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });

    this.cartService.getTotalAmount().subscribe(totalAmount => {
      this.totalAmount = totalAmount;
    });

    this.loadCartItems();

  }

  loadCartItems(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.calculateTotalAmount();
    });
  }

  


  increaseQuantity(item: Food): void {
    item.quantity++;
    this.cartService.updateCartItem(item);
  }

  decreaseQuantity(item: Food): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.cartService.updateCartItem(item);
    }
  }

  removeItem(item: Food): void {
    this.cartService.removeCartItem(item);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  // placeOrder(): void {
  //   const cartItemsToOrder = this.cartItems.map(item => ({
  //     foodId: item.foodId,
  //     quantity: item.quantity,
  //     price: item.foodPrice
  //   }));

  //   this.productService.createOrderForCart(cartItemsToOrder).subscribe({
  //     next: (order) => {
  //       console.log('Order placed successfully', order);
  //       this.router.navigate(['/checkout']);
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       console.error('Error placing order', error);
  //     }
  //   });
  // }

  placeOrder() {
    // Iterate over each cart item and place the order
    this.cartItems.forEach(item => {
      this.productService.createOrder(item.foodId, item.quantity).subscribe(
        response => {
          console.log(`Order for foodId ${item.foodId} placed successfully:`, response);
          // Handle successful response, e.g., show a success message or update UI
        },
        error => {
          console.error(`Error placing order for foodId ${item.foodId}:`, error);
          // Handle error response, e.g., show an error message or retry
        }
      );
    });
  }


  
 calculateTotalAmount(): void {
    this.totalAmount = this.cartItems.reduce((total, item) => {
      return total + (parseFloat(item.foodPrice) * item.quantity);
    }, 0);
  }




  

}