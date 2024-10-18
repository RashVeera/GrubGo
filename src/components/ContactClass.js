import React from "react";
import UserClass from "./UserClass";

class ContactClass extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Dummy Name",
            location:"Dummy Location"
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/rashika-veera");
        const json = await data.json();
        this.setState({
            name:json.name,
            location:json.location
        })
        this.timer=setInterval(()=>{
            console.log("called from Contact Class page")
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        return (
            <>
            <div>Contact</div>
            {/* <User name="Rashika Fn" location="Chennai"/> */}
            <UserClass name={this.state.name} location={this.state.location}/>
            </>
        )

    }
}

export default ContactClass