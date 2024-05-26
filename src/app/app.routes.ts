import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/Homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListyourpropertyComponent } from './pages/listyourproperty/listyourproperty.component';
import { ReviewsComponent } from './pages/support/support.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';




export const routes: Routes = [
 
    {path:"", redirectTo:'home', pathMatch:"full"},
    {path:"home", component: ProductListComponent},
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"Tenantdashboard", component:DashboardComponent},
    {path:"listyourproperty", component:ListyourpropertyComponent},
    {path:"support", component: ReviewsComponent},
    {path:"userdetails", component:UserDetailsComponent}

    
];
