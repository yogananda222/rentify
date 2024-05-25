import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-franchise',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './franchise.component.html',
  styleUrls:['./franchise.component.css']
})
export class FranchiseComponent {

  constructor(private router:Router){}

  phoneNumber: string = '';
  continueDisabled: boolean = true;

  checkPhoneNumber() {
    if (this.phoneNumber.length === 10) {
      this.continueDisabled = false;
    } else {
      this.continueDisabled = true;
    }
  }

  Submit() {
    alert('Thank you for your interest at our NANDAS Cafe Franchise. We will reach you shortly.')
  }

}
