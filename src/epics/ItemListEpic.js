import * as ActionTypes from '../actions/ActionTypes';
// import { ajax } from 'rxjs/observable/dom/ajax';
import { handleItemList, handleItemView } from '../actions/ItemListAction';
import 'rxjs/add/operator/switchMap';

import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { LIST_API, VIEW_API } from '../config';

export const itemListEpic = (action$) =>
    action$.ofType(ActionTypes.FETCH_ITEM_LIST)
        .switchMap(action =>
            ajax.getJSON(LIST_API).pipe(
                map(listResponse => handleItemList(listResponse)),
                catchError(error => console.error('itemListEpic * error: ', error))
            )
        );

export const itemViewtEpic = (action$) =>
    action$.ofType(ActionTypes.FETCH_ITEM_VIEW)
        .switchMap(action =>
            ajax.getJSON(`${VIEW_API}/` + action.payload.id).pipe(
                map(listResponse => handleItemView(listResponse)),
                catchError(error => console.error('itemViewtEpic * error: ', error))
            )
        );