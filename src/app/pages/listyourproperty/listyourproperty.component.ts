import { Component, OnInit } from '@angular/core';
import { Property } from '../../core/model/Property';
import { ProductService } from '../../core/services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listyourproperty',
  standalone:true,
  imports:[CommonModule, FormsModule],
  templateUrl: './listyourproperty.component.html',
  styleUrl: './listyourproperty.component.css'
})
export class ListyourpropertyComponent implements OnInit {

  property: Property = {
    Id:0,
    HouseImage: "",
    city :"",
    area: "",
    numberOfBedrooms:"",
    numberOfBathrooms:"",
    landmarks:"",
  }



  constructor(private productService: ProductService, private router: Router){}

  ngOnInit(): void {
      
  }

  addProperty(property : Property): void {
    this.productService.AddProperty(this.property).subscribe(
      (data) => {
        console.log('Property Added', data); 
        alert('Property added successfully');
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Failed to add property', error); 
      }
    );
  }



}
