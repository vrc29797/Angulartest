import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  requestedProducts = [];

  constructor(private http:HttpClient ) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }

  getRequestedProducts() {
    return this.requestedProducts;
  }

  addProductRequest(product) {
    this.requestedProducts.push(product);
  }
}
