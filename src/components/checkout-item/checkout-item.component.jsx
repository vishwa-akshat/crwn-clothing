import React from "react";

import { useDispatch, useSelector } from "react-redux";

import {
    clearItemFromCart,
    addItemToCart,
    removeItemFromCart,
} from "../../store/cart/cart.action.js";

import {
    CheckoutItemContainer,
    ImageContainer,
    RemoveButton,
    CheckouItemValue,
    Quantity,
    Arrow,
} from "./checkout-item.styles.jsx";
import { selectCartItems } from "../../store/cart/cart.selector.js";

export default function CheckoutItem({ cartItem }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const { name, price, imageUrl, quantity } = cartItem;

    const clearItemHandler = () =>
        dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () =>
        dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <CheckouItemValue>{name}</CheckouItemValue>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <span>{quantity}</span>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <CheckouItemValue>{price}</CheckouItemValue>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}
