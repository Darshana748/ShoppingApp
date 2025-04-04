import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import OurProducts from "./Pages/OurProducts";
import Login from "./Pages/Login";
import Checkout from "./Pages/Checkout";

export const router = createBrowserRouter([
    {
        path:"/ShoppingApp/",
        element:<Home/>
    },
    {
        path:"/ShoppingApp/OurProducts",
        element:<OurProducts/>
    },
    {
        path:"/ShoppingApp/Login",
        element:<Login/>
    },
    {
        path:"/ShoppingApp/Checkout",
        element:<Checkout/>
    }
])