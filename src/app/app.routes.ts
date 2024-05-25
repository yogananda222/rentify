import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/WelcomePage/product-list.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { HelpComponent } from './pages/help/help.component';
import { CartComponent } from './pages/cart/cart.component';
import { BookATableComponent } from './pages/book-a-table/book-a-table.component';
import { TermsComponent } from './pages/terms/terms.component';
import { FranchiseComponent } from './pages/franchise/franchise.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';


export const routes: Routes = [
 
    {path:"", redirectTo:'home', pathMatch:"full"},
    {path:"home", component: ProductListComponent},
    {path:"about", component: AboutComponent},
    {path:"menu", component: MenuComponent},
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"userdashboard", component: UserDashboardComponent},
    {path:"admin", component: AdminloginComponent},
    {path:"admindashboard", component: AdminDashboardComponent},
    {path:"help", component: HelpComponent},
    {path:"cart", component: CartComponent},
    {path:"Book-a-Table", component: BookATableComponent},
    {path:"terms&conditions", component: TermsComponent},
    {path:"franchise", component:FranchiseComponent},
    {path:"checkout", component:CheckOutComponent},
    {path:'user-details', component: UserDetailsComponent}
    
];
