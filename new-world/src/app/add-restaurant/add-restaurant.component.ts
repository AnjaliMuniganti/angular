import { RestaurantService } from './../restaurant.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  alert: boolean = false
  addRestaurant = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]*")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    webLink: new FormControl('', Validators.required),
    imgUrl: new FormControl('', Validators.required)
  })
  constructor(private restaurant: RestaurantService) { }

  ngOnInit(): void {
  }
  collectRestaurant() {
    this.restaurant.saveRestaurant(this.addRestaurant.value).subscribe((result: any) => {
      this.alert = true
      this.addRestaurant.reset({})
    })

  }
  closeAlert() {
    this.alert = false
  }
  get email() {
    return this.addRestaurant.get('email')
  }
}
