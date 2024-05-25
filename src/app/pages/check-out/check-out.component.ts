import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { ProductListComponent } from '../WelcomePage/product-list.component';
import { ProductService } from '../../core/services/product.service';
import { Food } from '../../core/model/food';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent  implements OnInit{


  @Input() totalAmount: number = 0;


  checkoutForm!: FormGroup;



constructor(private cartService: CartService, private productService: ProductService,  private formBuilder: FormBuilder,private router: Router){}

  ngOnInit(): void {
    this.cartService.getTotalAmount().subscribe(totalAmount => {
      this.totalAmount = totalAmount;
    });
  }




  onSubmit() {

    window.alert("Payment Sucessful");
    this.router.navigate(['/menu'])
    }



  }


