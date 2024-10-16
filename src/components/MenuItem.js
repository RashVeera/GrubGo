import React from 'react'

const MenuItem = ({menuitem}) => {
  const {name,defaultPrice,finalPrice,price,ratings,description,imageId}=menuitem.card.info;
  return (
    <div className='container-card'>
                <hr/>

    <div className='menu-card-container'>    
    
    <div className='menu-item-card-info'>
        <span>{name}</span>
        <span>₹ {defaultPrice/100 ||finalPrice/100 || price/100 }</span>
        <span>{ratings.aggregatedRating.rating || ""}</span>
        <span>{description}</span>
    </div>
    <div className='menu-item-card-image'>
    <img className='item-image' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+imageId}/>
    </div>
    </div>
        </div>



  )
}

export default MenuItem