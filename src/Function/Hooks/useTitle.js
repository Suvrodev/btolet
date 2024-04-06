import { useEffect } from "react";

const useTitle=title=>{
    useEffect(()=>{
        document.title=` BtoLet - ${title}`;
    },[title])

}

export default useTitle;