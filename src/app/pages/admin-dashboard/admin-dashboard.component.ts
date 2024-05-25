import { Component,  OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import {  Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Admin } from '../../core/model/admin';
import { FormsModule } from '@angular/forms';
import { User } from '../../core/model/user';
import { Food } from '../../core/model/food';
import { Order } from '../../core/model/order';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  standalone : true,
  imports:[CommonModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent  implements OnInit{


  admin : Admin| null = null; 
  showProfile: boolean = false;
  isDropdownOpen: boolean = false;
  users: User[] = [];
  newUser: User = {
    userId:0,
    username: '',
    userPassword: '',
    userContact: 0,
    userEmail:''
  };
  selectedUser: User = {
    userId: 0,
    username:'',
    userEmail:"",
    userContact:0,
    userPassword:""
  }
  deleteUserForm: boolean = false;
  deleteUserId: number = 0;

  foods: Food[] = [];

  newFood: Food = {
    foodId: 0,
    foodName: '',
    foodImage:"",
    foodDescription: '',
    foodPrice: '',
    quantity: 0
  };

  selectedFood: Food = {
    foodId: 0,
    foodName: '',
    foodImage:"",
    foodDescription: '',
    foodPrice: '',
    quantity: 0
  };

  deleteFoodId: number = 0;


  orders: Order[] = [];
  deleteOderById: number = 0;
  newOrder: Order = {
    orderId: 0,
    user: {
      userId:0, username:"" , userPassword:"", userContact:0, userEmail:""  },
    food: {
      foodId:0, foodName:"", foodPrice:"", foodDescription:"", foodImage:"",  quantity:0
    },
    totalPrice: 0,
    quantity: 0,
    ordeDate: 0,
    orderTime: 0
  };

  selectedOrder: Order = {
    orderId: 0,
    user: {
      userId:0, username:"" , userPassword:"", userContact:0, userEmail:""  },
    food: {
      foodId:0, foodName:"", foodPrice:"", foodDescription:"", foodImage:"",  quantity:0
    },
    quantity:0,
    totalPrice: 0,
    ordeDate: 0,
    orderTime: 0
  };


  showUserList = false;
  showAddUser = false;
  showUpdateUser = false;
  showDeleteUser = false;

  showFoodList = false;
  showAddFood = false;
  showUpdateFood = false;
  showDeleteFood = false;

  showOrderList = false; 
  showCreateOrder = false;
  showDeleteOrderById = false; 

  toggleForm(form: string) {
    this.showUserList = form === 'userList';
    this.showAddUser = form === 'addUser';
    this.showUpdateUser = form === 'updateUser';
    this.showDeleteUser = form === 'deleteUser';
    this.showFoodList = form === 'foodList';
    this.showAddFood = form === 'addFood';
    this.showUpdateFood = form === 'updateFood';
    this.showDeleteFood = form === 'deleteFood';
    this.showOrderList = form === 'orderlist';
    this.showCreateOrder = form === 'createorder';
    this.showDeleteOrderById = form === 'deleteorder'
  }

  constructor(private productService: ProductService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.admin = JSON.parse(sessionStorage.getItem("admin") || '{}');
    this.checkSessionAndNavigate();
    this.getAllUsers();
    this.getAllFoods();
    this.getAllOrder();
  }


  logout() {
    if (sessionStorage.getItem("admin")) {
      sessionStorage.clear()
      localStorage.clear()
      this.admin=null;
      alert("Hope will see you again ! Have a nice day :)")
      this.router.navigateByUrl("/home")
    }
    else {
      alert("No user loged in")
    }
   }
   checkSessionAndNavigate() {
    if (!this.admin) {
      this.router.navigateByUrl("/home");
    }
  }

  getAllUsers() {
    this.productService.getAllUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  addUser() {
    this.productService.registerUser(this.newUser).subscribe((newUser: User) => {
      this.users.push(newUser);
      this.newUser = { userId:0, username: '', userPassword: '', userContact:0, userEmail:"" };
      alert("User succesfully added")
    });
  }

  updateUser() {
    this.productService.updateuser(this.selectedUser).subscribe((updatedUser: User) => {
      const index = this.users.findIndex(user => user.userId === updatedUser.userId);
      if (index !== -1) {
        this.users[index] = updatedUser;
        this.selectedUser = { userId: 0, username: '', userPassword: '', userContact: 0, userEmail: '' }; 
        window.alert("User successfully updated")
      }
    });
  }


  onDeleteUser(): void {
    if (this.deleteUserId !== 0) {
      this.productService.deleteUser(this.deleteUserId).subscribe(
        () => {
          console.log('User deleted successfully');
          // Update the list of users after deletion
          this.getAllUsers();
          this.deleteUserId = 0; // Reset the deleteUserId
          window.alert("User Successfully Deleted")
        },
        error => {
          console.error('Error deleting user:', error);
        }
      );
    }
  }
  

  selectUser(user: User) {
    this.selectedUser = { ...user };
  }


  getAllFoods() : void{
    this.productService.getAllFoods().subscribe(foods => {
      this.foods = foods;
    })
  }

  addFood() {
      this.productService.Addfood(this.newFood).subscribe((newFood: Food) => {
        this.foods.push(newFood);
        this.newFood= { foodId: 0, foodName: '', foodDescription: '', foodPrice: '', quantity: 0, foodImage:"" };
        alert("Food Successfully addded");
      })
  }


  updateFood() {
    this.productService.updateFood(this.selectedFood).subscribe((updatedFood: Food) => {
      const index = this.foods.findIndex(food => food.foodId === updatedFood.foodId);
      if (index !== -1) {
        this.foods[index] = updatedFood;
        this.selectedFood = { foodId: 0, foodName: '', foodImage:"", foodDescription: '', foodPrice: '', quantity: 0 };
        window.alert("Food successfully updated");
      }
    });
  }

  onDeleteFood(): void {
    if (this.deleteFoodId !== 0) {
      this.productService.deleteFood(this.deleteFoodId).subscribe(
        () => {
          console.log('Food deleted successfully');
          // Update the list of foods after deletion
          this.getAllFoods();
          this.deleteFoodId = 0; // Reset the deleteFoodId
          window.alert("Food successfully deleted");
        },
        error => {
          console.error('Error deleting food:', error);
        }
      );
    }
  }

  selectFood(food: Food) {
    this.selectedFood = { ...food };
  }

  // getAllOrders() {
  //   this.productService.getAllOrders().subscribe((orders: Order[]) => { // <- Updated this line
  //     this.orders = orders;
  //   });
  // }

  getAllOrder(): void {
    this.productService.getAllOrders().subscribe((orders: Order[]) => {
      console.log(orders); // Log orders here
      this.orders = orders;
    }, error => {
      console.error('Error getting orders:', error);
    });
  }
  
  
  createOrder(foodId: number, quantity: number): void {
    this.productService.createOrder(foodId, quantity).subscribe(
      (order: Order) => {
        this.getAllOrder();
        alert("Order successfully created");
      },
      (error) => {
        console.error('Error creating order:', error);
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            // Client-side error
            console.error('An error occurred:', error.error.message);
          } else {
            // Backend error
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
          }
        } else {
          // Network error
          console.error('An unexpected error occurred:', error);
        }
        alert("Failed to create order. Please try again later.");
      }
    );
  }
  
  
  deleteOrder(orderId: number): void {
    if (confirm('Are you sure you want to delete this order?')) {
      this.productService.deleteOrderById(orderId).subscribe(() => {
        this.getAllOrder();
      }, (error: any) => {
        console.error('Error deleting order:', error);
      });
    }
  }
  
  getOrderById(orderId: number) {
    this.productService.getOrderById(orderId).subscribe((order: Order) => {
      this.selectedOrder = order;
    }, error => {
      console.error('Error getting order by ID:', error);
    });
  }

  
  getOrdersByUserId(userId: number) {
    this.productService.getorderbycustomerid(userId).subscribe((order: Order) => {
      // Handle success
      this.selectedOrder = order;
    }, error => {
      console.error('Error getting order by user ID:', error);
    });
  }
}