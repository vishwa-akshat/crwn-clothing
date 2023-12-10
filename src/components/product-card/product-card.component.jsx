import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { BUTTON_TYPE_CLASSES } from "../button/button.component.jsx";

import {
    ProductCardContainer,
    ProductCardImage,
    Footer,
    CardButton,
    FooterName,
    FooterPrice,
} from "./product-card.styles.jsx";

export default function ProductCard({ product }) {
    const { name, price, imageUrl } = product;

    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => {
        addItemToCart(product);
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
