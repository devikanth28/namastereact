import React, { useEffect, useState } from 'react'

const useRestaurentMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4471055&lng=78.37959769999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        console.log(data)
        const json = await data.json();
        console.log("json", json)
        setResInfo(json.data);
    }
    return resInfo
}

export default useRestaurentMenu