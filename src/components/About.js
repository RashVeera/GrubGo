import React from 'react'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext'

// const About = () => {
//   return (
//     <div>About Us</div>
//   )
// }

// export default About

class About extends React.Component{
  constructor(){
    super()
    console.log("Parent Constructor")
  }
  componentDidMount(){
    console.log("Parent did mount")
  }
  render(){
    console.log("Parent render")
    return (
      <>
      <h1>About</h1>
      <UserClass name="Rashika class" location="Chennai"/>
      <UserContext.Consumer>
        {({loggedInUser})=><span>{loggedInUser}</span>}
      </UserContext.Consumer>
      </>
    )
  }
}

export default About