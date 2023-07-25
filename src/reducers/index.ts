import { combineReducers } from 'redux';
import {priceReducer} from './priceReducer';
export default combineReducers({
    price: priceReducer,
});