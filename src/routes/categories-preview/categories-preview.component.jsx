import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import {
    selectCategoriesMap,
    selectCategoriesIsloading,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

export default function CategoriesPeview() {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsloading);

    return (
        <Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];

                    return (
                        <CategoryPreview
                            key={title}
                            title={title}
                            products={products}
                        />
                    );
                })
            )}
        </Fragment>
    );
}
