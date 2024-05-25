import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../core/model/user';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../services/cart.service';
import { Food } from '../../core/model/food';



@Component({
  selector: 'app-menu',
  standalone: true,
  imports:[CommonModule, FormsModule,],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent  implements OnInit{

  
  user: User | null = null;
  showProfile: boolean = false;
  isDropdownOpen: boolean = false;
  item: any[] =[]
  foods : Food[] = [];
  

 
  constructor(private productService: ProductService, public router: Router, private activeRoute: ActivatedRoute,
    private cartService: CartService
  ) { }


  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user") || '{}');
    this.getAllFoods();
  }  


  getAllFoods() : void{
    this.productService.getAllFoods().subscribe(foods => {
      this.foods = foods;
    })
  }

  addToCart(food: Food) {
    this.cartService.addToCart(food);
  }

  

navigateToMenu(){
  this.router.navigate(['/menu'])
}


toggleDropdown() {
  this.isDropdownOpen = !this.isDropdownOpen;
}


logout() {
  if (sessionStorage.getItem("user")) {
    sessionStorage.clear()
    localStorage.clear()
    this.user=null;
    alert("Hope will see you again ! Have a nice day :)")
    this.router.navigateByUrl("/log-in")
  }
  else {
    alert("No user loged in")
  }
 }
 checkSessionAndNavigate() {
  if (!this.user) {
    this.router.navigateByUrl("/log-in");
  }
}

toggleProfile() {
  this.showProfile = !this.showProfile;
}


navigateToHelp(){
  this.router.navigate(['/help'])
}

navigateToCart(){
  this.router.navigate(['/cart'])
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

navigateToUserDetails(){
  this.router.navigate(['/user-details'])
}

}