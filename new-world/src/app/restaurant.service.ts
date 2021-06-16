import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable()

export class RestaurantService {
  private loggedInStatus = false

  //baseUrl = environment.baseUrl;
  baseUrl='http://ec2-18-207-234-210.compute-1.amazonaws.com:8080';
  constructor(private http: HttpClient) { }
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }
  get isLoggedIn() {
    return this.loggedInStatus
  }
  
  public saveRestaurant(restaurant: any) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': '*',
    }   
    return this.http.post(this.baseUrl + '/saveRestaurant', restaurant, { responseType: "text" as "json" ,headers});
  }
  public getRestaurant() {
    return this.http.get(this.baseUrl + '/allRestaurant');
  }
  public deleteResto(id: any) {
    return this.http.get(this.baseUrl + '/deleteRestaurant/' + id);
  }
  public getCurrentRestaurant(id: number) {
    return this.http.get(this.baseUrl + '/allRestaurant/' + id);
  }
  public updateRestaurant(id: any, restaurant: any) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': '*',
    }   
    return this.http.put(this.baseUrl + '/updateRestaurant/' + id, restaurant, { responseType: "text" as "json" ,headers});
  }
  public saveRegister(register: any) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': '*',
    }   
    return this.http.post(this.baseUrl + '/saveRegister', register, { responseType: "text" as "json",headers})
  }
  public loginUser(register: any) {
    return this.http.post(this.baseUrl + '/loginUser', register);
  }
  public getspecificResto(id: number) {
    return this.http.get(this.baseUrl + '/allRestaurant/' + id);
  }
}