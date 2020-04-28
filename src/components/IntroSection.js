import React, { Component } from 'react'
import DonutChart  from './donut'

export class IntroSection extends Component {
    render() {
        return (
            <div style={navbar}>
                <DonutChart/>
                <image src="">
                    
                </image>
                <text style={navtext}> Hello</text>
                <text style={navtext}> Hello</text>
            </div>
        )
    }
}

const  navbar={
    display:"flex",
    flexFlow:"row wrap",
    justifyContent:"Center",
    alignItems:"center",
    height:"100px",
    width:"100%",
    backgroundColor:'lightgreen',
    color:'white'
}
const navtext={
    display:"flex",
    flexFlow:"row wrap",
    justifyContent:"Center",
    alignItems:"center",
    marginRight:'20px'
}

export default IntroSection
