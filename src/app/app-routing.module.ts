import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import {FormComponent} from './product/form.component';
import {ListComponent} from './sale/list.component';


const routes: Routes = [
  { path: 'login',          component: LoginComponent },
  { path: 'home',          component: HomeComponent },
  { path: 'product',          component: FormComponent },
  { path: 'sales',          component: ListComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
