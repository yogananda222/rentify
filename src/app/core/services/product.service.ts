import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, of } from 'rxjs';
import { NgModel } from '@angular/forms';
import { User } from '../model/user';
import { Admin } from '../model/admin';
import { Food } from '../model/food';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // [x: string]: any;

  // getMenuItems() {
  //   throw new Error('Method not implemented.');
  // }


  UserLogin= "http://localhost:8080/api/users/login";

  UserRegister = "http://localhost:8080/api/users/register"

  GetAllUsers = "http://localhost:8080/api/users/all"

  GetUserById = "http://localhost:8080/api/users/id/"

  UpdateUser = "http://localhost:8080/api/users/update"

  DeleteUserById =" http://localhost:8080/api/users/delete"

  GetUserbyUsername = "http://localhost:8080/api/users/username/{username}"

  AdminLogin= "http://localhost:8080/api/admins/login"

  AdminRegister = "http://localhost:8080/api/admins/register"

  GetAllFoods = "http://localhost:8080/api/foods/all"

  AddFood = "http://localhost:8080/api/foods/addfood"

  UdpateFood = "http://localhost:8080/api/foods/update"

  DeleteFoodbyId = "http://localhost:8080/api/foods/delete"

  GetFoodByFoodname = "http://localhost:8080/api/foods/foodName/{foodName}"

  GetAllOrders = "http://localhost:8080/api/orders/vieworders"

  CreateOrder = "http://localhost:8080/api/orders/create"

  DeleteOrderById = "http://localhost:8080/api/orders/delete"

  GetOdersByUserId = "http://localhost:8080/api/orders/user"

  GetOrdersByOrderId = "http://localhost:8080/api/orders/orders"


  constructor(private http: HttpClient) { }


  loginAdmin(admin: Admin): Observable<Admin> {
    console.log(admin);
    return this.http.post<Admin>(`${this.AdminLogin}`,admin);
  }

  loginUser(user: User): Observable<User> {
    console.log(user)
    return this.http.post<User>(this.UserLogin, user);
  }
  
  
  registerUser(user: User): Observable<User> {
    const httpOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post<User>(this.UserRegister, user, httpOptions);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.GetAllUsers);
  }
  getuserbyid(uid: number):Observable<User>  {
    const uidUrl = this.GetUserById + "/" + uid;
    return this.http.get<User>(uidUrl);
  }

  updateuser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.put<User>(this.UpdateUser, user, httpOptions);
  }
  

  deleteUser(id: number) {
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.delete<User>(this.DeleteUserById+`/${id}`,httpOptions);
  }

  getUserByUsername(username:String):Observable<User>  {
    const uidUrl = this.GetUserbyUsername + "/" + username;
    return this.http.get<User>(uidUrl);
  }

  

  Addfood(food: Food): Observable<Food> {
    const httpOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post<Food>(this.AddFood, food, httpOptions);
  }

  updateFood(food: Food): Observable<Food> {
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };
    return this.http.put<Food>(this.UdpateFood, food,httpOptions);
  }
  
  deleteFood(id: number) {
   
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.delete<Food>(this.DeleteFoodbyId+`/${id}`,httpOptions);
  }

  GetFoodByFoodName(foodName: string): Observable<Food[]> {
    const url = `${this.GetFoodByFoodname}/${foodName}`;
    return this.http.get<Food[]>(url);
  }
  

  getAllFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(this.GetAllFoods);
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.GetAllOrders);
  }

  deleteOrderById(orderId: number): Observable<any> {
    const url = `${this.DeleteOrderById}/${orderId}`;
    return this.http.delete(url);
  }
  
  // createOrder(foodId: number, quantity: number): Observable<Order> {
  //   const url = `${this.CreateOrder}/${foodId}`;
  //   // Assuming totalPrice and foodDescription are not needed while creating order
  //   const orderData = {
  //     foodId,
  //     quantity
  //   };
  //   return this.http.post<Order>(url, orderData);
  // }

  createOrder(foodId: number, quantity: number): Observable<Order> {
    const url = `${this.CreateOrder}/${foodId}`;
    const orderData = { foodId, quantity };
    
    return this.http.post<Order>(url, orderData);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' // Adjust this as needed
      })
    };
  }

  
  getOrderById(orderId: number): Observable<Order> {
    const url = `${this.GetOrdersByOrderId}/${orderId}`;
    return this.http.get<Order>(url);
  }

  getorderbycustomerid(userId: number): Observable<Order> {
    const url = `${this.GetOdersByUserId}/${userId}`;
    return this.http.get<Order>(url);
  }

  getOrdersByUserId(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.GetOdersByUserId}/${userId}`);
  }
  
createOrderForCart(cartItems: { foodId: number, quantity: number, foodPrice: string }[]): Observable<Order> {
    const orderData = {
      items: cartItems.map(item => ({
        foodId: item.foodId,
        quantity: item.quantity,
        price: item.foodPrice
      }))
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post<Order>(this.CreateOrder, orderData, httpOptions);
  }

}
