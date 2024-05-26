import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class ProductListComponent  {
  isDropdownOpen: boolean = false;

  constructor(private router: Router, private productService: ProductService){}

  navigateToRegister(){
    this.router.navigate(['/register'])
  }

  navigateToLogin(){
    this.router.navigate(['/login'])
  }

  navigateToListingProperty(){
    this.router.navigate(['/listyourproperty'])
  }

  navigateToDashboard(){
    this.router.navigate(['/dashboard'])
  }

  navigateToSupport(){
    this.router.navigate(['/support'])
  }

  navigateToReviwes(){
    this.router.navigate(['/reviews'])
  }
}