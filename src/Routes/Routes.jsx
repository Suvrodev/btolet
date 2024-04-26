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
import UserLocation from "../Layout/Pages/UserResponsibility/UserLocation/UserLocation/UserLocation";
import ImageZoom from "../Layout/Pages/UserResponsibility/Check/ImageZoom/ImageZoom";
import CheckSvg from "../Layout/Pages/UserResponsibility/Check/SVG/CheckSvg/CheckSvg";
import Skeleton from "../Layout/Pages/UserResponsibility/Check/Skeleton/skeleton";
import NewShort from "../Layout/Pages/Sort/NewShort/NewShort/NewShort";
import CheckDownUPLayout from "../Layout/Pages/UserResponsibility/Check/CheckDownUPLayout/CheckDownUPLayout";
import Modal from "../Layout/Pages/Home/Rent/Rent/Modal/Modal";
import RentCardSkl from "../Layout/Pages/Home/Rent/Rent/RentCardSKL/RentCardSkl";
import FullImage from "../Layout/Pages/SharedPage/FullImage/FullImage";
import RentDetailSkl from "../Layout/Pages/Home/Rent/RentDetail/RentDetailSKL/RentDetailSkl";
import Rent from "../Layout/Pages/Home/Rent/Rent/Rent";
import AboutUs from "../Layout/Pages/Home/OwnerIdentity/AboutUs/AboutUs";
import TermsAndConditions from "../Layout/Pages/Home/OwnerIdentity/TermsAndConditions/TermsAndConditions";
import { Feedback } from "@mui/icons-material";
import FeedBack from "../Layout/Pages/Home/OwnerIdentity/FeedBack/FeedBack";
import CheckCoockies from "../Layout/Pages/UserResponsibility/Check/CheckCoockies/CheckCoockies";
import Observer from "../Layout/Pages/Home/OwnerIdentity/DeveloperCheck/Observer/Observer/Observer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Navigate to="/home"></Navigate>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      // {
      //   path: "/buy",
      //   element: <Buy></Buy>,
      // },
      {
        path: "/rent",
        element: <Rent></Rent>,
      },
      // {
      //   path: '/buypost',
      //   element: <PrivateRoute><BuyPost></BuyPost></PrivateRoute>
      // },

      {
        path: "/buydetail/:id",
        element: <BuyDetail></BuyDetail>,
      },
      {
        path: "/rentpost",
        element: (
          <PrivateRoute>
            <RentPost></RentPost>
          </PrivateRoute>
        ),
      },
      {
        path: "rentdetail/:id",
        element: <RentDetail></RentDetail>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/termsandconditions",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/feedback",
        element: <FeedBack></FeedBack>,
      },
      {
        path: "/check",
        element: <Checki></Checki>,
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/savedpost",
        element: (
          <PrivateRoute>
            <SavedPost></SavedPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/mypost",
        element: (
          <PrivateRoute>
            <MyPost></MyPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/filter",
        element: <Filter></Filter>,
      },
      {
        path: "/zcheck",
        element: <ZCheck></ZCheck>,
      },
      {
        path: "/location",
        element: <UserLocation></UserLocation>,
      },
      {
        path: "/cs",
        element: <CheckSvg></CheckSvg>,
      },
      {
        path: "/skl",
        element: <Skeleton />,
      },
      {
        path: "/ns",
        element: <NewShort></NewShort>,
      },
      {
        path: "/bt",
        element: <CheckDownUPLayout />,
      },
      {
        path: "/mdl",
        element: <Modal></Modal>,
      },
      {
        path: "/fullimage",
        element: <FullImage />,
      },
      {
        path: "/rdskl",
        element: <RentDetailSkl />,
      },
      {
        path: "/cc",
        element: <CheckCoockies></CheckCoockies>,
      },
      {
        path: "/osv",
        element: <Observer></Observer>,
      },
    ],
  },
]);

export default router;
