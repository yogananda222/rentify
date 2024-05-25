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

  user: User = {userId:0,username:'',userPassword:'',userEmail:'',userContact:0}

  userId: number =0
  username : string =''
  userPassword: string =''
  userEmail: string =""
  userContact:number=0
  isEditable: any;
  

  constructor(public productService: ProductService, public router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      
  }

  registerUser(user: User): void {
    this.productService.registerUser(this.user).subscribe(
      (data) => {
        console.log('Registration successful', data); // Log success response
        alert('User registered successfully');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Failed to register user', error); // Log error
        // Handle error here, you might want to display an error message to the user
      }
    );
  }
}