import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginSuccessComponent } from './login-success/login-success.component';

const routes: Routes = [
  {
    component: AddRestaurantComponent,
    path: 'add'
  },
  {
    component: UpdateRestaurantComponent,
    path: 'update/:id'
  },
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: RegisterComponent,
    path: 'register'

  },
  {
    component: LoginSuccessComponent,
    path: 'login-success',
    canActivate: [AuthGuard]
  },
  {
    component: ListRestaurantComponent,
    path: 'list'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
