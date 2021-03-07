import {State, Action, StateContext, Selector} from '@ngxs/store';
import {StateModel} from '../models/product.model';
import {AddList, RemoveList, GetList,SetSelectedList,UpdateList} from '../actions/product.action';

export class ListStateModel {
    list: StateModel[];
    selectedList: StateModel;
}

@State<ListStateModel>({
    name: 'lists',
    defaults: {
        list: [],
        selectedList: null
    }
})
export class ProductState {

    constructor() {
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
   
}

