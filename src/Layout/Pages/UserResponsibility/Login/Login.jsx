import React, { useState, useEffect, useContext } from "react";
import { GoogleLogin, useGoogleOAuth } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";

import seaImage from "../../../../assets/Image/SeaBitch.jpg";

const Login = () => {
  const { successfullMessage, baseUrl } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const toGo = location?.state?.from?.pathname || "/";

  const [loggedUser, setLoggedUser] = useState("");
  console.log("Logged User: ", loggedUser);

  const hanldeUserAdd = (decode) => {
    console.log("login Button Click");
    console.log("decode in Function: ", decode);
    setLoggedUser(decode);

    if (decode) {
      console.log("Logged User::::::: ", decode);

      const name = decode?.name;
      const email = decode?.email;
      const image = decode?.picture;
      const geolocation = "";
      const signature = "";

      const userInfo = { name, email, image, geolocation, signature };
      console.log("User Info: ", userInfo);

      fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("After Login: ", data[0]);

          if (data[0].uid) {
            localStorage.setItem("uId", data[0].uid);
            console.log("Login Succesfully");
            successfullMessage("Login Successfully");
            navigate(toGo, { replace: true });
            window.location.reload();
          }
        });
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row h-[100%] bg-transparent md:bg-green-600  rounded-xl border-2 gap-10 md:gap-0 mt-20 ">
      <div className="w-full md:w-[70%] h-full bg-red-500 rounded-xl">
        <img className="h-[100%] rounded-xl" src={seaImage} alt="" />
      </div>
      <div className="w-full md:w-[30%]  bg-yellow-500 flex items-center justify-center">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            // console.log(credentialResponse);
            const decode = jwtDecode(credentialResponse?.credential);

            // console.log("Info: ",decode);
            if (decode) {
              // setLoggedUser(decode)
              hanldeUserAdd(decode);
            }
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
};

export default Login;

/**
 * Yt Link: https://www.youtube.com/watch?v=r5ff1_3WrPM&t=3s
 * npm: https://www.npmjs.com/package/@react-oauth/google
 */
