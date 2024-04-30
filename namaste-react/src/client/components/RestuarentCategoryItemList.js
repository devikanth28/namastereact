import React from 'react'
import { CDN_URL } from '../common/constants'
import { useDispatch } from "react-redux"
import { addItem } from '../redux/CartSlice'
import RenderedAddedButton from './RenderedAddedButton'

const RestuarentCategoryItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        dispatch(addItem(item))
    }
    return (
        <div>
            <div>
                {items.map((eachItem) => {
                  const obj = {
                    iName : eachItem.card.info.name,
                    id    : eachItem.card.info.id,
                    count : 0
                  }
                  // console.log("eachItem",obj)
                    return (
                        <div className='p-2 m-3 border-bottom text-start d-flex justify-content-between'>
                            <div>
                                <span>{eachItem.card.info.name}</span>
                                <span> -  &#x20B9;   { eachItem.card.info.price ? eachItem.card.info.price / 100 : eachItem.card.info.defaultPrice / 100}</span>
                            <p className='text-secondary '>{eachItem.card.info.description}</p>
                            </div>
                            <div>
                            {eachItem.card.info.imageId && <><img src={CDN_URL + eachItem.card.info.imageId} style={{"width":"150px","height":"110px"}} className="rounded-2 d-block"/>
                            {/* <button className='bg-dark border-0 rounded-3 position-absolute text-white fs-6 ms-2' style={{"margin-top":"-106px"}}  onClick={()=>{handleAddItem(eachItem)}}>Add +</button> */}
                            <RenderedAddedButton item={eachItem}/>
                            </>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RestuarentCategoryItemList