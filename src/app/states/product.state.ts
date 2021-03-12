import {State, Action, StateContext, Selector} from '@ngxs/store';
import {StateModel} from '../models/product.model';
import {Login,AddList, RemoveList, LoginSuccess,LoginFailure,SetSelectedList,UpdateList} from '../actions/product.action';
import {PojoService} from '../pojo.service';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

export class ListStateModel {
    list: StateModel[];
    selectedList: StateModel;
}
export interface LoginPageStateModel {
    error: string | null;
    pending: boolean;
  }

 
@State<ListStateModel>({
    name: 'lists',
    defaults: {
        list: [],
        selectedList: null
    }
})

export class ProductState {

    constructor(private pojoService: PojoService,private router:Router) {
    }

    @Selector()
    static getList(state: ListStateModel) {
        return state.list;
    }

    @Selector()
    static getSelected(state: ListStateModel) {
        return state.selectedList;
    }

    @Action(AddList)
    AddList({getState, patchState}: StateContext<ListStateModel>, {payload}: AddList) {
            const state = getState();
            console.log(state);
            patchState({
                list: [...state.list, payload]
            });
    }
   
    @Action(UpdateList)
    UpdateList({getState, setState}: StateContext<ListStateModel>, {payload, productid}: UpdateList) {
            const state = getState();
            const updatedList = [...state.list];
            const updatedIndex = updatedList.findIndex(item => item.productid === productid);
            updatedList[updatedIndex] = payload;
            setState({
                ...state,
                list: updatedList,
            });
      //  }));
    }


    @Action(RemoveList)
    RemoveList({getState, setState}: StateContext<ListStateModel>, {productid}: RemoveList) {
            const state = getState();
            const filteredArray = state.list.filter(item => item.productid !== productid);
            setState({
                ...state,
                list: filteredArray,
            });
    }

    @Action(SetSelectedList)
    SetSelectedListId({getState, setState}: StateContext<ListStateModel>, {payload}: SetSelectedList) {
        const state = getState();
        setState({
            ...state,
            selectedList: payload
        });
    }

    @Action(Login)
  login(
    { dispatch, patchState }: StateContext<LoginPageStateModel>,
    action: Login
  ) {
    patchState({
      error: null,
      pending: true,
    });
    return this.pojoService.login(action.payload).pipe(
      map((user) => dispatch(new LoginSuccess({ user }))),
      catchError((error) => {
        return dispatch(new LoginFailure(error));
      })
    );
  }

  @Action(LoginSuccess)
  loginSuccess({ dispatch, patchState }: StateContext<LoginPageStateModel>) {
    patchState({
      error: null,
      pending: false,
    });

   // dispatch(new Navigate(['/']));
   this.router.navigate(['/product']);
  }
   
}

