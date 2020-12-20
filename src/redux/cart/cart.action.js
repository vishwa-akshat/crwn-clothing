import CartActionTypes from './cart.types';

// eslint-disable-next-line
export const toggleCartHidden =()=> ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})