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
    Id:0,
    firstName: "",
    lastName :"",
    password: "",
    email:"",
    role:"",
    phoneNumber:"",
  }



  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {

  }

  loginuser(): void {
    this.productService.loginUser(this.user).subscribe(
      data => {
        alert('Nice to see you again!');
        console.log('login response' + data);
        sessionStorage.setItem("user", JSON.stringify(data));
        this.router.navigateByUrl("/dashboard");
      },
      error => alert('Invalid Username or Password')
    );
  
}
  navigateToRegister() : void{
    this.router.navigate(['/register']); 
    
  }

}
