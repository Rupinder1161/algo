
import React, { Component } from 'react'
import Navbar from './NavBar'
import ApexChart from './NewChart'
import IntroSection from './IntroSection'

export class Resume extends Component {
    render() {
        return (
            <div style={style}>
                   <Navbar/>
                   <IntroSection/>
                   <div style={style2}>
                   <ApexChart/>
                   </div>
                   
            </div>
        )
    }
}

const style ={
    width:"100%"
}
const style2 ={
    width:"100%",
    display:"flex",
    flexFlow:"row wrap",
    justifyContent:"center",
    alignItems:"center"
}
export default Resume
