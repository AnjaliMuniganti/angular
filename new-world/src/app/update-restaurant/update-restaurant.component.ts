import { RestaurantService } from './../restaurant.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  alert: boolean = false;
  editRestaurant = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    webLink: new FormControl(''),
    imgUrl:new FormControl('')

  })
  constructor(private router: Router, private route: ActivatedRoute, private restaurant: RestaurantService) { }

  ngOnInit(): void {
    console.warn(this.route.snapshot.params.id)
    this.restaurant.getCurrentRestaurant(this.route.snapshot.params.id).
      subscribe((result: any) => {
        this.editRestaurant = new FormGroup({
          name: new FormControl(result['name']),
          email: new FormControl(result['email']),
          address: new FormControl(result['address']),
          webLink: new FormControl(result['webLink']),
          imgUrl:new FormControl(result['imgUrl'])
        })
        console.warn("result", result)
      })
  }
  collection() {
    console.warn(this.editRestaurant.value);
    this.restaurant.updateRestaurant(this.route.snapshot.params.id, this.editRestaurant.value).
      subscribe((result: any) => {
        this.alert = true;
      })
  }
  closeAlert() {
    this.alert = false;
  }
}



