import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';

import {ProductState} from '../states/product.state';
import {StateModel} from '../models/product.model';

@Component({
selector: 'login-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  invalid:boolean;
  
  @Select(ProductState.getList) todos: Observable<StateModel[]>;

  todo$: Observable<StateModel>
  constructor(
        private store: Store,
        private router: Router) { 
          this.todo$ = this.store.select(state => state.todos.todos)
        }

  ngOnInit() {
  }

  onClickSubmit(username,password) {
      if(username=="admin"&& password=="test123"){
        this.router.navigate(['/product']);
      }else{
        this.invalid=true;
      } 
  }
}
