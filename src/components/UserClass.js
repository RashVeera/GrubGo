import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        console.log("Child constructor")
    }
    componentDidMount(){
        console.log("child component did mount")
    }
 render(){
    const {name,location}=this.props;
    // console.log(name,location)
    console.log("Child render")
    return (
        <>
        <h3>Count:{this.state.count}</h3>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Count increment</button>
         <h1>Name : {name}</h1>
    <h3>Location: {location}</h3>
    <h3>Social Media : rashikaveera@gmail.com</h3>
        
        </>
    )
 }
}

export default UserClass