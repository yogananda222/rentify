import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class ProductListComponent  {

  constructor(private router: Router, private productService: ProductService){}

  navigateToRegister(){
    this.router.navigate(['/register'])
  }

  navigateToLogin(){
    this.router.navigate(['/login'])
  }
}