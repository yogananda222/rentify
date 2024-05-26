import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { User } from '../../core/model/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterOutlet,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

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

  registerUser(user: User): void {
    this.productService.reigsteruser(this.user).subscribe(
      (data) => {
        console.log('Registration successful', data); 
        alert('User registered successfully');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Failed to register user', error); 
      }
    );
  }

  navigateToLogin(){
    this.router.navigate(['/login'])
  }
}