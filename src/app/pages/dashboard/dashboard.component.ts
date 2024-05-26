import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { User } from '../../core/model/user';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Property } from '../../core/model/Property';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  user: User | null = null; 
  showProfile: boolean = false;
  isDropdownOpen: boolean = false;
  properties: Property[] = [];


  constructor(private productService:ProductService, public router: Router){}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user") || '{}');  
    this.getAllProperties();
  }

  toggleProfile() {
    this.showProfile = !this.showProfile;
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

   navigateToUserDetails()
{
  this.router.navigate(['/user-details'])
}  

// getAllProperties(): void {
//   this.productService.getAllProperties().subscribe(
//     (properties: Property[]) => {
//       this.properties = properties;
//     },
//     (error) => {
//       console.error('Error fetching properties:', error);
//     }
//   );
// }

getAllProperties() : void{
  this.productService.getAllProperties().subscribe(properties => {
    this.properties = properties;
  })
}


}
