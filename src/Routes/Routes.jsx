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
import UpdateProfile from "../Layout/Pages/UserResponsibility/UpdateProfile/UpdateProfile";
import Checki from "../Layout/Pages/UserResponsibility/Check/Checki";
import SavedPost from "../Layout/Pages/UserResponsibility/SavedPost/SavedPost/SavedPost";
import MyPost from "../Layout/Pages/UserResponsibility/MyPost/MyPost/MyPost";
import ZCheck from "../Layout/Pages/ZCheck1/ZCheck";
import Filter from "../Layout/Pages/Sort/Filter/Filter";



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
          path: '/check',
          element: <Checki></Checki>
        },
        {
          path: '/updateprofile',
          element: <UpdateProfile></UpdateProfile>
        },
        {
          path:'/savedpost',
          element: <SavedPost></SavedPost>
        },
        {
          path: '/mypost',
          element: <MyPost></MyPost>
        },
        {
          path: '/filter',
          element: <Filter></Filter>
        },
        {
          path: '/zcheck',
          element: <ZCheck></ZCheck>
        }
      ]
    },
  ]);

export default router;