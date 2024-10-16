import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    const [btnName,setbtnName]=useState("Login")
    return (
        <>
        <div className='header-container'>
            <Link to="/"><img className='logo' src={LOGO_URL} /></Link>
            <ul className='links'>
                <li><Link to="/">Home</Link></li>
               <li> <Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <button onClick={()=>{
                btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
                }} className="Loginbtn">{btnName}</button>
            </ul>
        </div>
        </>
    )
}

export default Header;