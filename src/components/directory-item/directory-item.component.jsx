import React from "react";

import { useNavigate } from "react-router-dom";

import {
    DirectoryItemContainer,
    BackgroundImage,
    Body,
} from "./directory-item.styles.jsx";

export default function DirectoryItem({ category }) {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate(route);

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage className="background-image" imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
}
