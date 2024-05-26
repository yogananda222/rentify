import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { ProductListComponent } from '../pages/Homepage/homepage.component';

import { LoginComponent } from '../pages/login/login.component';
import { RouterOutlet } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ 
    ProductListComponent,



  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterOutlet,
    ReactiveFormsModule,
    MatDialogModule
    
  ]
})
export class AppModule { }
