import { combineEpics } from 'redux-observable';
import { itemListEpic, itemViewtEpic } from './ItemListEpic';

export default combineEpics(
    itemListEpic,
    itemViewtEpic
);
