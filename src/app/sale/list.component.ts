import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable,Subscription} from 'rxjs';
import { Router} from '@angular/router';
//import {FormGroup} from '@angular/forms';

import {StateModel} from '../models/product.model';
import {ProductState} from '../states/product.state';
import { GetList,RemoveList,  SetSelectedList } from '../actions/product.action';
import {PojoService} from '../pojo.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    @Select(ProductState.getList) salelist: Observable<StateModel[]>;

   // todoForm: FormGroup;
   // todo$: Observable<StateModel>
   // private formSubscription: Subscription = new Subscription();

    constructor(private pojoService: PojoService,private store: Store,private router: Router) {
    }

    ngOnInit() {
        this.store.dispatch(new GetList());
       // console.log(this.salelist);
    }
  

    delete(id) {
        this.store.dispatch(new RemoveList(id));
    }

    edit(payload: StateModel) {
        this.pojoService.setFlag(true);
        this.store.dispatch(new SetSelectedList(payload));
        this.router.navigate(['/product']);
    }
    logout(){
        this.router.navigate(['/login']);
      }
      home(){
        this.router.navigate(['/home']);
      }
      product(){
       this.pojoService.setFlag(false);
        //this.editTodo=false;
        this.router.navigate(['/product']);
      }

}
