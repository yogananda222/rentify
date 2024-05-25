import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { ProductListComponent } from '../pages/WelcomePage/product-list.component';
import { AboutComponent } from '../pages/about/about.component';
import { MenuComponent } from '../pages/menu/menu.component';
import { LoginComponent } from '../pages/login/login.component';
import { UserDashboardComponent } from '../pages/user-dashboard/user-dashboard.component';
import { RouterOutlet } from '@angular/router';
import { AdminDashboardComponent } from '../pages/admin-dashboard/admin-dashboard.component';
import { AdminloginComponent } from '../pages/adminlogin/adminlogin.component';
import { BookATableComponent } from '../pages/book-a-table/book-a-table.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ 
    ProductListComponent,
    AboutComponent,


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
