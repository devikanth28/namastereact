import React, { useState } from 'react'
import RestuarentCategoryItemList from './RestuarentCategoryItemList'

const ResturentCategory = ({ data, showItem, setShowIndex }) => {
   
    return (
        <div className='shadow'>
            <div className=' p-3 mx-auto my-3 d-flex justify-content-between' onClick={()=>{setShowIndex()}}>
                <span className='fw-bold'>{data.title}({data?.itemCards?.length})</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <g id="bottomchevron_black_icon_18px" transform="translate(-762 -906.838)">
                        <rect id="Rectangle_4721" data-name="Rectangle 4721" width="18" height="18" transform="translate(762 906.838)" fill="none" />
                        <path id="Path_23400" data-name="Path 23400" d="M61.559,501.985l4.049-4.049a.917.917,0,0,0-1.3-1.3l-3.4,3.39-3.4-3.4a.921.921,0,0,0-1.569.649.912.912,0,0,0,.272.649l4.049,4.059A.922.922,0,0,0,61.559,501.985Z" transform="translate(710.032 416.557)" fill="#080808" />
                    </g>
                </svg>
            </div>
            <div>
              {showItem &&   <RestuarentCategoryItemList items={data.itemCards}/>   }
            </div>
        </div>
    )
}

export default ResturentCategory