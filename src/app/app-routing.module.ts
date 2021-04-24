import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CreatebookingComponent } from './createbooking/createbooking.component';
import { HotelsComponent } from './hotels/hotels.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
//path: '', redirectTo: '/missionList', pathMatch: 'full'
const routes: Routes = [
    {path: '', component: AppComponent, children: [
      {path: '', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'hotels', component: HotelsComponent},
      {path: 'bookings', component: BookingsComponent},
      {path: 'createbooking', component: CreatebookingComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
