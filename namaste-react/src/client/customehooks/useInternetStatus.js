import React, { useEffect, useState } from "react";

const useInternetStatus = () =>{
    const [internetStatus, setInternetStatus] = useState(undefined);

    useEffect(()=>{
        window.addEventListener("online",()=>{
            setInternetStatus(true);
        })
        window.addEventListener("offline",()=>{
            setInternetStatus(false)
        })
    },[])

    return internetStatus

}
export default useInternetStatus