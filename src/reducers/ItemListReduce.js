
import * as ActionTypes from '../actions/ActionTypes';
import { getUniqueKey } from '../utils/AppUtils';

const initialState = {
    list: [],
    totalList: 0,
    viewItem: { data: {}, id: '', links: {} }
}

export default function (state = initialState, action) {
    const payload = action.payload;
    switch (action.type) {
        // success response while getting all list items
        case ActionTypes.FETCH_ITEM_LIST_SUCCESS:
            // insert unique key to each array item
            payload.data.forEach((item) => {
                item.key = getUniqueKey();
            });
            return { 
                list: payload.data,
                totalList: payload.meta.count
            };
        // success response while getting view item    
        case ActionTypes.FETCH_ITEM_VIEW_SUCCESS:
            return { 
                viewItem: { data: payload.data, id: payload.id, links: payload.links }
            };
        default:
            return state;
    }
}
