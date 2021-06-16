import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { RestaurantService } from './../restaurant.service';
import {Router} from '@angular/router'
import { Register } from '../register';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg='';
  alert:boolean=false
    login=new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('')
       })
  constructor(private router: Router,private restaurant:RestaurantService) { }

  ngOnInit(): void {
  }
register: Register = new Register("","","");
  collectionLogin(){
    this.restaurant.loginUser(this.register).subscribe( (data: any) =>{
      this.router.navigate(['/login-success'])
      this.restaurant.setLoggedIn(true)  
    },
    error => this.msg = "Bad Credentials,Please provide valid email and password"
    ) 

  }
  get email() {
    return this.login.get('email')
  }
}