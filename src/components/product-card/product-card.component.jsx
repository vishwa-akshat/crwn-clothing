import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { BUTTON_TYPE_CLASSES } from "../button/button.component.jsx";

import { addItemToCart } from "../../store/cart/cart.action.js";

import { selectCartItems } from "../../store/cart/cart.selector.js";

import {
    ProductCardContainer,
    ProductCardImage,
    Footer,
    CardButton,
    FooterName,
    FooterPrice,
} from "./product-card.styles.jsx";

export default function ProductCard({ product }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { name, price, imageUrl } = product;

    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems, product));
    };

    return (
        <ProductCardContainer>
            <ProductCardImage src={imageUrl} alt={`${name}`} />
            <Footer>
                <FooterName>{name}</FooterName>
                <FooterPrice>$ {price}</FooterPrice>
            </Footer>
            <CardButton
                onClick={addProductToCart}
                buttonType={BUTTON_TYPE_CLASSES.inverted}
            >
                Add to cart
            </CardButton>
        </ProductCardContainer>
    );
}
