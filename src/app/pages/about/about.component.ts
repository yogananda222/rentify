import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  
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
  
  navigateToItemsPage(){
    this.router.navigate(['/'])
  }


}
