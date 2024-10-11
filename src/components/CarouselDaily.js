import React from 'react'

const CarouselDaily = (props) => {
    const {carouselitem}=props;
  return (
        <div className='carouseldailyimagecontainer'>
            <img onClick={()=>{
            }} className='carouselimage' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/'+carouselitem.imageId}/>

        </div>
  )
}

export default CarouselDaily