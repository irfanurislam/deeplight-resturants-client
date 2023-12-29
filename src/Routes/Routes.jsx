import * as React from "react";

import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/SharedPage/ErrorPage";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/Signup/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
              path: '/',
              element: <Home></Home>
        },
        {
              path: '/login',
              element: <Login></Login>
        },
        {
              path: '/signup',
              element: <SignUp></SignUp>
        }
    ]
    },
  ]);