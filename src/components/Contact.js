import React from 'react'

const Contact = () => {
  return (
    <div className='h-96 mt-14'>
      <form >
        <div className='flex flex-col gap-3 justify-center items-center w-1/4 border border-black bg-slate-300 p-6 ml-[550px]  '>
        <h1 className='text-orange-500 font-semibold'>Contact Us</h1>

      <div><span className='text-orange-500 font-semibold'>Name</span> <input type='name' placeholder='name' className='border p-1 border-black ml-5 rounded-sm'/></div>
      <div ><span  className='text-orange-500 font-semibold'>Message </span><input type='message' className='border border-black p-1 ml-1  rounded-sm' placeholder='message' /></div>
      <button type='submit' className='border border-black p-1 rounded-sm w-28 bg-orange-600 text-white' >Submit</button>
      </div>
      </form>
    </div>
  )
}

export default Contact