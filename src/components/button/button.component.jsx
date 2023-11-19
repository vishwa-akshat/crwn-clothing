import React from "react";

import "./button.styles.scss";

const BUTTON_TYPE_CLLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
};

export default function Button({ children, buttonType, ...otherProps }) {
    return (
        <button
            className={`button-container ${BUTTON_TYPE_CLLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
}
