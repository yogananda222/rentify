import { Component, OnInit } from '@angular/core';
import { Admin } from '../../core/model/admin';
import { ProductService } from '../../core/services/product.service';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports:[FormsModule, RouterOutlet],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent implements OnInit {


  admin: Admin ={
    adminId: 0 ,
    adminName: "" ,
    adminPassword: "",
    adminEmail: "",
    adminContact: 0,
  }



  constructor(private router: Router, private productService: ProductService){}

ngOnInit(): void {
    
}

loginAdmin(): void {
  this.productService.loginAdmin(this.admin).subscribe(
    data => {
      alert('Welcome Admin');
      console.log('login response' + data);
      sessionStorage.setItem("admin", JSON.stringify(data));
      this.router.navigateByUrl("/admindashboard");
    },
    error => alert('Invalid Username or Password')
  );

}



}