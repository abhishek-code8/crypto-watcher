import * as actionTypes from '../actionTypes';


let initialState = {
    price: 0,
    coinName: "",
};

function priceReducer (state=initialState, action: { type: any; price: number; }){
    switch(action.type){
        case actionTypes.SET_PRICE:
            return {...initialState, price: action.price};
        default:
            return 0;
    }
}

export {priceReducer};