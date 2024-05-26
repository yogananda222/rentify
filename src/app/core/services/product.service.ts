import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, of } from 'rxjs';
import { User } from '../model/user';
import { Property } from '../model/Property';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Userlogin = "http://localhost:8080/api/users/login" 

  UserRegister = "http://localhost:8080/api/users/register"

  allUsers = "http://localhost:8080/api/users/all"

  private allPropertiesUrl = 'http://localhost:8080/api/properties/all';

  addProperty = "http://localhost:8080/api/properties/addProperty"

  updatePropertyById = "http://localhost:8080/api/properties/update/"

  getPropertyById = "http://localhost:8080/api/properties/"

  deletePropertyById = "http://localhost:8080/api/properties/delete/"

  constructor(private http: HttpClient) { }

  loginUser(user: User): Observable<User> {
    console.log(user)
    return this.http.post<User>(this.Userlogin, user);
  }

  reigsteruser(user: User): Observable<User> {
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
    return this.http.get<User[]>(this.allUsers);
  }

  getAllProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.allPropertiesUrl);
  }


  AddProperty(property: Property): Observable<Property> {
    const httpOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post<Property>(this.addProperty, property, httpOptions);
  }

  udpateProperty(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'auth-token',
      'Access-Control-Allow-Origin': '*'
    })
  };
    return this.http.put<Property>(this.updatePropertyById+`/${id}`,httpOptions);
  }

  deleteProperty(id: number) {
   
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.delete<Property>(this.deletePropertyById+`/${id}`,httpOptions);
  }

}
