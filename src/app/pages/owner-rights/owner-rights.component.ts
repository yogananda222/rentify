import { Component, OnInit } from '@angular/core';
import { Property } from '../../core/model/Property';
import { ProductService } from '../../core/services/product.service';
import { Router } from '@angular/router';
import { User } from '../../core/model/user';
import { TemplateSourceManager } from '@angular/compiler-cli/src/ngtsc/typecheck/src/source';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-owner-rights',
  standalone: true,
  imports:[CommonModule, FormsModule],
  templateUrl: './owner-rights.component.html',
  styleUrl: './owner-rights.component.css'
})
export class OwnerRightsComponent  implements OnInit{

  userProperties: Property[] = [];
  property: Property = {
    Id: 0,
    HouseImage: '',
    city: '',
    area: '',
    numberOfBedrooms: '',
    numberOfBathrooms: '',
    landmarks: ''
  };
  showForm: boolean = false;
  isEdit: boolean = false;

  constructor(private productService: ProductService, private router: Router){}

  ngOnInit(): void {
      
  }

  getUserProperties() {
    // Assuming you have some way to get the logged-in user's details
    const loggedInUser: User = {
      Id: 1, // Assuming this is user 1
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phoneNumber: '1234567890',
      password: 'password',
      role: 'user'
    };

    // Fetch properties for the logged-in user
    this.productService.getPropertyByFirstName(loggedInUser.firstName)
      .subscribe(properties => {
        this.userProperties = properties;
      });
  }

  editProperty(property: Property) {
    // Set property for editing
    this.property = { ...property };
    this.isEdit = true;
    this.showForm = true;
  }

  deleteProperty(propertyId: number) {
    // Delete property
    this.productService.deleteProperty(propertyId)
      .subscribe(() => {
        // Update property list after deletion
        this.getUserProperties();
      });
  }

  submitForm() {
    if (this.isEdit) {
      // Update existing property
      this.productService.udpateProperty(this.property.Id)
        .subscribe(() => {
          // Reset form and update property list after update
          this.isEdit = false;
          this.showForm = false;
          this.getUserProperties();
        });
    } else {
      // Add new property
      this.productService.AddProperty(this.property)
        .subscribe(() => {
          // Reset form and update property list after addition
          this.showForm = false;
          this.getUserProperties();
        });
    }
  }


}
