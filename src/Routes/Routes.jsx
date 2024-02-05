import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import Home from "../Layout/Pages/Home/Home/Home";
import Main from "../Layout/Main/Main";
import Buy from "../Layout/Pages/Buy/Buy/Buy";
import BuyPost from "../Layout/Pages/Buy/BuyPost/BuyPost/BuyPost";
import Login from "../Layout/Pages/UserResponsibility/Login/Login";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Navigate to='/home'></Navigate>
        },
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/buy',
            element: <Buy></Buy>
        },
        {
          path: '/buypost',
          element: <BuyPost></BuyPost>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

export default router;