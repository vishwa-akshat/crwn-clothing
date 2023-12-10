import React from "react";
import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import {
    CategoryPreviewContainer,
    CategoryPreviewTitle,
    CategoryPreviewWrapper,
} from "./category-preview.styles.jsx";

export default function CategoryPreview({ title, products }) {
    return (
        <CategoryPreviewContainer>
            <CategoryPreviewTitle>
                <Link to={title} className="title">
                    {title.toUpperCase()}
                </Link>
            </CategoryPreviewTitle>
            <CategoryPreviewWrapper>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </CategoryPreviewWrapper>
        </CategoryPreviewContainer>
    );
}
