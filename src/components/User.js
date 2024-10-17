import { useState } from "react";

const User =({name,location})=>{
    const [count,setcount]=useState(0);
    return (<>
    <h2>Count : {count}</h2>
    <button onClick={()=>{
        setcount(count+1)
    }}>Count increment</button>
    <h1>Name : {name}</h1>
    <h3>Location: {location}</h3>
    <h3>Social Media : rashikaveera@gmail.com</h3>
    
    </>)
}

export default User;