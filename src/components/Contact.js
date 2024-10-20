import React, { useEffect, useState } from 'react'
import User from './User'
import UserClass from './UserClass'
import useOnlineStatus from '../utils/useOnlinestatus'

const Contact = () => {
  const [UserInfo,setUserInfo]=useState({});
  const onlinemode=useOnlineStatus();
  if(!onlinemode){
    return <OfflineContent/>
  }
  const fetchapi = async ()=>{
    const data = await fetch("https://api.github.com/users/rashika-veera");
    const json = await data.json();
    setUserInfo(json);
    // console.log(UserInfo);
  }
  useEffect(()=>{
    fetchapi()
  },[])
  return (
    <>
    <div>Contact</div>
    {/* <User name="Rashika Fn" location="Chennai"/> */}
    <UserClass name={UserInfo.name} location={UserInfo.location}/>
    </>
  )
}

export default Contact