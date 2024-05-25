import { Component, OnInit } from '@angular/core';
import { User } from '../../core/model/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../core/model/order';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {



  user: User | null = null;

  orders: Order[] = [];



  constructor(private productService: ProductService, private router: Router,   private route: ActivatedRoute){}


  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user") || '{}');
    const userId = 40// Replace 1 with the actual userId
    this.getOrdersByUserId(userId);

    if (this.user) {
      this.getOrdersByUserId(this.user.userId);
    }
  }

  getOrdersByUserId(userId: number): void {
    this.productService.getOrdersByUserId(userId).subscribe(
      (orders: Order[]) => {
        this.orders = orders;
      },
      (error: HttpErrorResponse) => {
        console.error('Error getting orders by user ID:', error);
      }
    );
  }
  
}
