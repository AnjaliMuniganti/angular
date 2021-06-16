import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})

export class LoginSuccessComponent implements OnInit {
  addRestaurants: any;

  constructor(private service: RestaurantService) { }

  ngOnInit(): void {
    let response = this.service.getRestaurant();
    response.subscribe(data => this.addRestaurants = data);
  }

}





