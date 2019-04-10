import * as ActionTypes from './ActionTypes';

export function handleItemList(response) {
    return {
        type: ActionTypes.FETCH_ITEM_LIST_SUCCESS,
        payload: response
    }
}

export function handleItemView(response) {
    return {
        type: ActionTypes.FETCH_ITEM_VIEW_SUCCESS,
        payload: response
    }
}