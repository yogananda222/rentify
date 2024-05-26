import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { User } from '../../core/model/user';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-owner-dashboard',
  standalone: true,
  imports:[FormsModule, RouterOutlet],
  templateUrl: './owner-dashboard.component.html',
  styleUrl: './owner-dashboard.component.css'
})
export class OwnerDashboardComponent implements OnInit{

  user: User = {
    Id:0,
    firstName: "",
    lastName :"",
    password: "",
    email:"",
    role:"",
    phoneNumber:"",
  }

  constructor(private router: Router, private productService: ProductService){}

  ngOnInit(): void {
      
  }

  loginuser(): void {
    this.productService.loginUser(this.user).subscribe(
      data => {
        alert('Nice to see you again!');
        console.log('login response' + data);
        sessionStorage.setItem("user", JSON.stringify(data));
        this.router.navigateByUrl("/ownerights");
      },
      error => alert('Invalid Username or Password')
    );
  
}

}
