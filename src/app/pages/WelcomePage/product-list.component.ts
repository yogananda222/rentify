import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {

  constructor(private router: Router, private productService: ProductService){}

  navigateToHelp(){
    this.router.navigate(['/help'])
  }

  navigateToCart(){
    this.router.navigate(['/cart'])
  }

  navigateToLogin(){
    this.router.navigate(['/login'])
  }

  navigateToBookaTable(){
    this.router.navigate(['/Book-a-Table'])
  }

  navigateToFranchise() {
    this.router.navigateByUrl('/franchise');
  }

  navigateToHome() {
    this.router.navigate(['/home'])
  }

  navigateToTerms() {
    this.router.navigate(['/terms&conditions'])
  }

  navigateToAbout(){
    this.router.navigate(['/about'])
  }

  navigateToMenu(){
    this.router.navigate(['/login'])
  }
}