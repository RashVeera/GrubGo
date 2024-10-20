import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-200 mt-10 border-black'>
        <div className='flex flex-wrap gap-3 pt-7 justify-center'>
            <h2 className='font-bold text-2xl'>For better experience,download the GrabNGo app now</h2>
            <img className='w-32 h-11' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"/>
            <img className='w-32 h-11' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png'/>
        </div>
        <div className='flex justify-center gap-2 mt-7 pb-5'> 
        <h4 className='font-bold'>Social Links</h4>
            <img src='https://media-assets.swiggy.com/h_32/portal/m/seo/icon-linkedin.png'/>
            <img src='https://media-assets.swiggy.com/h_32/portal/m/seo/icon-instagram.png'/>
            <img src='https://media-assets.swiggy.com/h_32/portal/m/seo/icon-facebook.png'/>
            <img src='https://media-assets.swiggy.com/h_32/portal/m/seo/icon-pinterest.png'/>
            <img src='https://media-assets.swiggy.com/h_32/portal/m/seo/icon-twitter.png'/>
        </div>
    </div>
  )
}

export default Footer