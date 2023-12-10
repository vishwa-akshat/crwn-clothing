import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
    CheckoutItemContainer,
    ImageContainer,
    RemoveButton,
    CheckouItemValue,
    Quantity,
    Arrow,
} from "./checkout-item.styles.jsx";

export default function CheckoutItem({ cartItem }) {
    const { name, price, imageUrl, quantity } = cartItem;

    const { clearItemFromCart, removeItemFromCart, addItemToCart } =
        useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

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
