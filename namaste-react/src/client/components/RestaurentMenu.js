import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import useRestaurentMenu from '../customehooks/useRestaurentMenu';
import Header from './Header';
import ResturentCategory from './ResturentCategory';
const RestaurentMenu = () => {
    // const [resInfo, setResInfo] = useState(null)
    const {resId} = useParams();
    const resInfo  = useRestaurentMenu(resId);
    const [showIndex, setShowIndex] = useState(undefined);
      if(resInfo){
        const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
        const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ?? [];

      }

     const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(eachCard => eachCard.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  return (
    <div>
      <Header/>
        {resInfo && <div className='menu'>
                <h3 className='fs-4'>{resInfo?.cards[0]?.card?.card?.info?.name}</h3>
                <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")} - {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
                <div className='container'>
                {categories && categories.map((eachCategory, index)=>{
                  const toggleMenu = index == showIndex ? true : false;
                  return(
                    <ResturentCategory data = {eachCategory?.card?.card} showItem={index == showIndex ? true : false} setShowIndex={() => {
                      setShowIndex(toggleMenu ? null : index); 
                  }}/>
                  )
                })}
                </div>
            </div>}
    
    </div>
    // <div>{resInfo?.cards[0]?.card?.card?.info?.name}</div>
  )
}

export default RestaurentMenu