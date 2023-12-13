import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPeview from "../categories-preview/categories-preview.component";

import { fetchCategoriesAsync } from "../../store/categories/category.action";

import Category from "../category/category.component";

export default function Shop() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesAsync());
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPeview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
}
