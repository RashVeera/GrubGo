import React from 'react'
import { Link } from 'react-router-dom'
// import offlineimage from '../assets/images/offlineimage.jpeg'

const OfflineContent = () => {
  return (

    <div className='mt-44 flex flex-col justify-center gap-3 items-center'>
        <img className="w-2/6" src="data:image/jpeg;base64,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"/>
        
        <h1>Uh-oh you're in offline mode!</h1>
        <Link to={"/"}><button className=" px-4 py-1 border border-solid shadow-md border-orange-800 bg-orange-500 text-white rounded-sm ">Retry</button></Link>

        </div>
  )
}

export default OfflineContent