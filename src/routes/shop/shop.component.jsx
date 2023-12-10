import { Routes, Route } from "react-router-dom";

import CategoriesPeview from "../categories-preview/categories-preview.component";

import Category from "../category/category.component";

export default function Shop() {
    return (
        <Routes>
            <Route index element={<CategoriesPeview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
}
