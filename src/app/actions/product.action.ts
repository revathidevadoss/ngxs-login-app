import {StateModel} from '../models/product.model';


export class RemoveList {
    static readonly type = '[State] Remove'

    constructor(public productid: number) {}
}

export class AddList {
    static readonly type = '[State] Add';

    constructor(public payload: StateModel) {
    }
}
export class UpdateList {
    static readonly type = '[State] Update';

    constructor(public payload: StateModel, public productid: number) {
    }
}
export class GetList {
    static readonly type = '[State] Get';
}
export class SetSelectedList {
    static readonly type = '[State] Set';

    constructor(public payload: StateModel) {
    }
}
export class DeleteList {
    static readonly type = '[State] Delete';

    constructor(public productid: number) {
    }
}

