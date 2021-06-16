import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './../restaurant.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {
  addRestaurants: any;
  constructor(private restaurant: RestaurantService) { }

  ngOnInit(): void {
    let response = this.restaurant.getRestaurant();
    response.subscribe(data => this.addRestaurants = data);
  }

  public removeRestaurant(id: any) {
    let response = this.restaurant.deleteResto(id);
    response.subscribe(data => this.addRestaurants = data);

  }
}