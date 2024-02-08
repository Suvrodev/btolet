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
import RentDetail from "../Layout/Pages/Home/Rent/RentDetail/RentDetail";
import BuyDetail from "../Layout/Pages/Buy/BuyDetail/BuyDetail";
import RentPost from "../Layout/Pages/Home/Rent/RentPost/RentPost/RentPost";
import UpdateUser from "../Layout/Pages/UserResponsibility/UpdateUser/UpdateUser";
import UpdateProfile from "../Layout/Pages/UserResponsibility/UpdateProfile/UpdateProfile";


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
          path: '/login',
          element: <Login></Login>
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
          path: '/buydetail/:id',
          element: <BuyDetail></BuyDetail>
        },
        {
          path: '/rentpost',
          element: <RentPost></RentPost>
        },
        {
          path: 'rentdetail/:id',
          element: <RentDetail></RentDetail>
        },
        {
          path: '/updateuser',
          element: <UpdateUser></UpdateUser>
        },
        {
          path: '/updateprofile',
          element: <UpdateProfile></UpdateProfile>
        }
      ]
    },
  ]);

export default router;