import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AI from "../Pages/AI";
import Hardware from "../Pages/Hardware";
import Software from "../Pages/Software";
import Portfolios from "../Pages/Portfolios";
import Aboutus from "../Pages/Aboutus";
import Contactus from "../Pages/Contactus";

export const router =createBrowserRouter([
    {
        path : "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/AI",
                element: <AI></AI>
            },
            {
                path: "/Hardware",
                element: <Hardware></Hardware>
            },
            {
                path: "/Software",
                element: <Software></Software>
            },
            {
                path: "/Portfolios",
                element: <Portfolios></Portfolios>
            },
            {
                path: "/Aboutus",
                element: <Aboutus></Aboutus>
            },
            {
                path: "/Contactus",
                element: <Contactus></Contactus>
            }
        ]
    }
])