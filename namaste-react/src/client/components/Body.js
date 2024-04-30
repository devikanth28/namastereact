import React, { useEffect, useState, useContext } from 'react'
import RestaurentCard,{withPromotedLabel} from './RestaurentCard'
import { resData } from '../common/constants'
import { Link } from 'react-router-dom';
import useInternetStatus from '../customehooks/useInternetStatus';
import UserContext from '../common/UserContext';
const Body = () => {
    const [listOfRest, setListOfRes] = useState([]);
    const [searchText, setSearchText]=useState("");
    const [filtereRes, setFiltredRes]=useState([]);
    const onlineStatus = useInternetStatus();
    const RestaurentCardWithPromoted = withPromotedLabel(RestaurentCard);

    useEffect(()=>{
        featchData() 
    },[])



    const featchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFiltredRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const {loggedInUser,setUserName} = useContext(UserContext);

    if(listOfRest?.length == 0){
       return <h1>Loading..........</h1> 
    }


    const handleSearch = () => {
        const filteredRestaurants = listOfRest.filter((eachRes) => {
            return eachRes?.info?.name.toLowerCase().includes(searchText.toLowerCase());
        });
    
        setFiltredRes(filteredRestaurants);
    };

    const handleTopRatedRestaurants = () => {
        const topRatingRestaurants = listOfRest.filter((eachRes)=>{
            return eachRes?.info?.avgRating > 4
        })
        setFiltredRes(topRatingRestaurants);
    }

    if(onlineStatus == false){
       return <h1>You are offline! plaese check your internet connection</h1>
    }

    return (
        <div className='body'>
            <div className='search d-flex'>
                <input type="search" className='search-box ms-3' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/><button className='bg-success btn mx-3' onClick={()=>{handleSearch()}}>Search</button>
            <button className='filtred-btn border-0 btn-danger filtred-btn py-1 rounded-3' onClick={()=>{handleTopRatedRestaurants()}}>Top Rated Resturants</button>
            <div className='search'>
               context editor <input className='border ms-3 p-2' value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}/>
            </div>
            </div>
            <div className='res-container'>
                {filtereRes?.map((eachRes) => {
                    console.log(eachRes.info,"eachRes.info.id")
                    return (
                        <>
                            <Link to={"/restaurants/" + eachRes.info.id} className="text-decoration-none text-start text-dark">
                                {eachRes.info.avgRating == "4.3" ? <RestaurentCardWithPromoted resturant={eachRes.info}/> : <RestaurentCard resturant={eachRes.info}/>}
                                </Link>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Body