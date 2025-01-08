import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Dashboard from "../layout/Dashboard";
import Card from "../pages/Dashboard/Card/Card";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element:<Menu></Menu>
            }
            ,
            {
                path: "/order/:category",
                element:<Order></Order>
            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path: "/signUp",
                element:<SignUp></SignUp>
            },
            {
                path: "/secret",
                element:<PrivateRoute><Secret></Secret></PrivateRoute>
            },
        ]

    },
    {
        path: "dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path: "cart",
                element: <Card></Card>
            },
            {
                path: "allUsers",
                element: <AllUsers></AllUsers>
            },
        ]
    }
])