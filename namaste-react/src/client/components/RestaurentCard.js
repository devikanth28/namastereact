import React from 'react'
import { CDN_URL } from '../common/constants';

const RestaurentCard = (props) => {
   const {name,cuisines,avgRating,costForTwo,sla, cloudinaryImageId } = props.resturant;

  return (
    <div className='res-card rounded-3' style={{backgroundColor:"#e5e5e5"}} >
        <img src={CDN_URL + cloudinaryImageId} alt="food image" className='res-logo'/>
      <div className='ps-3'>
        <h6>{name}</h6>
        <h4 className='fs-6 fw-lighter'>{cuisines.join(", ")}</h4>
        <h4 className='fw-lighter fs-6'>{avgRating}</h4>
        <p className='mb-0'>{costForTwo}</p>
        <p>{sla.deliveryTime} minutes</p>
      </div>
    </div>
  )
}

export const withPromotedLabel = (RestaurentCard) =>{
  return (props) =>{
    return(
      <div>
        <label className='bg-dark m-3 p-2 rounded-3 text-white position-absolute'>
          Promoted
        </label>
        <RestaurentCard {...props}/>
      </div>
    )
  }
}

export default RestaurentCard