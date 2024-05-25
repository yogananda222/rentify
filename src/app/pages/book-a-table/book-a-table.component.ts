import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../core/model/user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-book-a-table',
  standalone: true,
  imports:[CommonModule, FormsModule],
  templateUrl: './book-a-table.component.html',
  styleUrl: './book-a-table.component.css'
})
export class BookATableComponent  {

constructor(private router: Router){}

bookingDetails = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: 1
};
successMessage: string | undefined;

onSubmit() {
  // Handle form submission logic here
  this.bookingDetails.guests = this.bookingDetails.guests < 1 ? 1 : this.bookingDetails.guests;

  console.log('Booking details submitted:', this.bookingDetails,);
  
  this.successMessage = 'Congratulations! Your table has been booked.';

  setTimeout(() => {
    this.router.navigate(['/homepage']); // Replace '/' with the actual path to your homepage
  }, 3000);
}

  resetForm() {
    this.bookingDetails = this.bookingDetails; 
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
  }
