import { Component, OnInit } from '@angular/core';
import { User } from '../../core/model/user';
import { Property } from '../../core/model/Property';
import { ProductService } from '../../core/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

  user: User[] = []

  property : Property [] = []

  constructor(private productService: ProductService, private rotuer: Router){}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user") || '{}');
  }


  getPropertiesByFirstName(firstName: string): void {
    this.productService.getPropertyByFirstName(firstName).subscribe(properties => {
      this.property = this.property;
    });
  }






}
