import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";

export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
        </div>
    )
}