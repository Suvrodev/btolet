import React,{ useEffect } from "react"

const GoToTop=()=>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return null;
}

export default GoToTop;