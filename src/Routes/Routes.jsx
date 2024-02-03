import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import Home from "../Layout/Pages/Home/Home/Home";
import Main from "../Layout/Main/Main";
import Buy from "../Layout/Pages/Buy/Buy/Buy";


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
        }
      ]
    },
  ]);

export default router;