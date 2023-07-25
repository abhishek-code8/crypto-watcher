import * as actionTypes from '../actionTypes';

const setPrice = (price:number) => {
    return {
        type: actionTypes.SET_PRICE,
        price: price
    }
};


export {setPrice};
