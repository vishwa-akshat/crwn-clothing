import React from "react";

import {
    CartItemContainer,
    ItemDetails,
    ItemName,
    ItemPrice,
} from "./cart-item.styles.jsx";

export default function CartItem({ cartItem }) {
    const { name, quantity, imageUrl, price } = cartItem;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name} />
            <ItemDetails>
                <ItemName>{name}</ItemName>
                <ItemPrice>
                    {quantity} x ${price}
                </ItemPrice>
            </ItemDetails>
        </CartItemContainer>
    );
}
