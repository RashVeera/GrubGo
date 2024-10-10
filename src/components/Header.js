import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header=()=>{
    const [btnName,setbtnName]=useState("Login")
    return (
        <>
        <div className='header-container'>
            <img className='logo' src={LOGO_URL} />
            <ul className='links'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <button onClick={()=>{
                btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
                }} className="Loginbtn">{btnName}</button>
            </ul>
        </div>
        </>
    )
}

export default Header;