import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../store/cart/cart.selector.js";

import {
    CartDropDownContainer,
    CartItems,
    CartButton,
    EmptyMessage,
} from "./cart-dropdown.styles.jsx";

export default function CartDropdown() {
    const cartItems = useSelector(selectCartItems);

    const navigation = useNavigate();

    const goToCheckoutHandler = () => {
        navigation("/checkout");
    };

    return (
        <CartDropDownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                ) : (
                    <EmptyMessage> Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <CartButton onClick={goToCheckoutHandler}>
                GO TO CHECKOUT
            </CartButton>
        </CartDropDownContainer>
    );
}
