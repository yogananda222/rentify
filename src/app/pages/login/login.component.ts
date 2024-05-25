import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { User } from '../../core/model/user';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    userId: 0,
    username: '',
    userPassword: '',
    userEmail: '',
    userContact: 0
  };



  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {

  }

  loginuser(): void {
    this.productService.loginUser(this.user).subscribe(
      data => {
        alert('Nice to see you again!');
        console.log('login response' + data);
        sessionStorage.setItem("user", JSON.stringify(data));
        this.router.navigateByUrl("/userdashboard");
      },
      error => alert('Invalid Username or Password')
    );
  
}



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
  

  navigateToRegister() : void{
    this.router.navigate(['/register']); 
    
  }

  navigateToAdmin(): void{
    this.router.navigate(['/admin'])
  }

}
