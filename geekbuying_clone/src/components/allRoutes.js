import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { ProductDetails } from "../pages/ProductDetails";

export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/products/:id" element={<ProductDetails/>}></Route>
            </Routes>
        </div>
    )
}