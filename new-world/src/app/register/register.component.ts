import { RestaurantService } from './../restaurant.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert: boolean = false
  register = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]*")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')])
  })
  constructor(private restaurant: RestaurantService) { }
  ngOnInit(): void { }

  collection() {
    this.restaurant.saveRegister(this.register.value).subscribe((result: any) => {
      this.alert = true
      this.register.reset({})
    })
  }
  closeAlert() {
    this.alert = false
  }
  get email() {
    return this.register.get('email')
  }
  get password(){
    return this.register.get('password')
    }
}

