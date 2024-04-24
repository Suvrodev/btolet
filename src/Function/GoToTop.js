import { useEffect } from "react"

const GoToTop=()=>{
    useEffect(()=>{
        window.screenTop(0,0)
    },[])
    return null;
}

export default GoToTop;