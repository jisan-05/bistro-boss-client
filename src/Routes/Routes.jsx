import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import Secret from "../pages/Shared/secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "menu",
                element: <Menu></Menu>,
            },
            {
                path: "order/:category",
                element: <Order></Order>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "signUp",
                element: <SignUp></SignUp>,
            },
            {
                path: "secret",
                element: (
                    <PrivetRoute>
                        <Secret></Secret>
                    </PrivetRoute>
                ),
            },
        ],
    },
    {
        path:'dashboard',
        element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children:[
            {
                path:'cart',
                element:<Cart></Cart>
            }
        ]
    }
]);

export default router;
