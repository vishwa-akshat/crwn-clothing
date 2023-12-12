import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    selectCartCount,
    selectIsCartOpen,
} from "../../store/cart/cart.selector.js";
import {
    CartIconContainer,
    ShoppingIcon,
    ItemCount,
} from "./cart-icon.styles.jsx";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

export default function CartIcon() {
    const dispatch = useDispatch();

    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
}
