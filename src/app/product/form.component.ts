import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Select, Store} from '@ngxs/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

import {ProductState} from '../states/product.state';
import {AddList,UpdateList} from '../actions/product.action';
import {StateModel} from '../models/product.model';
import {PojoService} from '../pojo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  @Select(ProductState.getSelected) selectedList: Observable<StateModel>;
  productForm: FormGroup;
  editFlag = false;
  pojoFlag:boolean;
  toggle:any;
  Submit;
  private formSubscription: Subscription = new Subscription();

  constructor(private pojoService: PojoService,private fb: FormBuilder, private store: Store, private route: ActivatedRoute, private router: Router) {
    this.createForm();
  }
  submitForm() {
    this.pojoFlag=this.pojoService.getFlag();
    if (this.editFlag && this.pojoFlag) {
      this.formSubscription.add(
        this.store.dispatch(new UpdateList(this.productForm.value, this.productForm.value.productid)).subscribe(() => {
          this.clearForm();
          this.router.navigate(['/sales']);
        })
      );
    } else {
      this.formSubscription.add(
        this.formSubscription = this.store.dispatch(new AddList(this.productForm.value)).subscribe(() => {
          this.clearForm();
        })
      );
    }
  }
 
  ngOnInit() {
    this.pojoFlag=this.pojoService.getFlag();
    this.formSubscription.add(
      this.selectedList.subscribe(list => {
        if (list && this.pojoFlag) {
          this.productForm.patchValue({
            productid: list.productid,
            productname: list.productname,
            amount: list.amount
          });
          this.editFlag = true;
          this.Submit="Update";
        } else {
          this.clearForm();
          this.editFlag = false;
          this.Submit="Submit";
        }
      })
    );
}
  
  clearForm() {
    this.productForm.reset();
    //this.store.dispatch(new SetSelectedList(null));
  }
 
  ngOnDestroy(): void {
   // this.store.dispatch(new AddList(this.productForm.value));
    this.formSubscription.unsubscribe();
  }

  createForm() {
    this.productForm = this.fb.group({
      productid: [''],
      productname: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }
  home(){
    this.router.navigate(['/home']);
  }
  logout(){
    this.router.navigate(['/login']);
  }
  sales(){
    this.router.navigate(['/sales']);
  }
  product(){
    this.router.navigate(['/product']);
  }
 
}
