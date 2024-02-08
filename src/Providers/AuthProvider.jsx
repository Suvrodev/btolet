import React, { Children, createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const AuthContext=createContext("")
const AuthProvider = ({children}) => {

    const [uId,setUId]=useState("")
    const [currentUser,setCurrentUser]=useState("")

    useEffect(()=>{
        const uid=localStorage.getItem('uId')
        if(uid){
            console.log("Local Storage uid: ",uid);
            setUId(uid)
        }else{
            setUId('nouid')
        }
      
    },[uId])

    if(uId){
        // console.log("Current uid: ",uId);
    }


    useEffect(()=>{
        fetch(`http://154.26.135.41:3800/api/uid`,{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({uid: uId })
        })
        .then(res=>res.json())
        .then(data=>{
           if(data){
            setCurrentUser(data[0]);
           }
        })        
    },[uId])

    // console.log("Current User: ",currentUser);



    const successfullMessage=(text)=>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: text,
            showConfirmButton: false,
            timer: 1500
          });
    }

    const authInfo={
        uId,
        currentUser,
        successfullMessage
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;