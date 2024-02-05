
import React, { useState, useEffect } from 'react';
import {  GoogleLogin, useGoogleOAuth } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';



const Login = () => {

   

    return (
        <div>
            Login
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    const decode=jwtDecode(credentialResponse?.credential)
                    console.log("Info: ",decode);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                />
        </div>
    );
};

export default Login;