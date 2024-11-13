import React from 'react'
import { Carousel } from '../utils/constants';

const CarouselDaily = (props) => {
    const {carouselitem}=props;
  return (
        <div  className='w-36 flex-shrink-0 '>
            <img onClick={()=>{
            }} className='w-36 rounded-xl' src={Carousel+carouselitem.imageId}/>

        </div>
  )
}

export default CarouselDaily