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
import SavedPost from "../Layout/Pages/UserResponsibility/SavedPost/SavedPost/SavedPost";
import MyPost from "../Layout/Pages/UserResponsibility/MyPost/MyPost/MyPost";
import Filter from "../Layout/Pages/Sort/Filter/Filter";
import PrivateRoute from "./PrivateRoute";
import Checki from "../Layout/Pages/UserResponsibility/Check/Checki";
import ZCheck from "../Layout/Pages/UserResponsibility/Check/ZCheck1/ZCheck";
import MapCheck from "../Layout/Pages/UserResponsibility/Check/MapCheck/MapCheck";
import UserLocation from "../Layout/Pages/UserResponsibility/UserLocation/UserLocation/UserLocation";



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
        // {
        //   path: '/buypost',
        //   element: <PrivateRoute><BuyPost></BuyPost></PrivateRoute>
        // },
       
        {
          path: '/buydetail/:id',
          element: <BuyDetail></BuyDetail>
        },
        // {
        //   path: '/rentpost',
        //   element: <PrivateRoute><RentPost></RentPost></PrivateRoute>
        // },
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
          element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
          path:'/savedpost',
          element: <PrivateRoute><SavedPost></SavedPost></PrivateRoute>
        },
        {
          path: '/mypost',
          element: <PrivateRoute><MyPost></MyPost></PrivateRoute>
        },
        {
          path: '/filter',
          element: <Filter></Filter>
        },
        {
          path: '/zcheck',
          element: <ZCheck></ZCheck>
        },
        {
          path: '/mc',
          element: <MapCheck/>
        },
        {
          path: '/location',
          element: <UserLocation></UserLocation>
        }
      ]
    },
  ]);

export default router;