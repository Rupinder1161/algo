import React, { Component } from 'react'
import { FormHelperText } from '@material-ui/core'
import SearchBar1 from './Resume'

export class NavBar extends Component {
    render() {
        return (
            <div style={style.navbar}>
                <h3 style={style.h3}>G</h3>
                <h3 style={style.h3}>Gurpreet Singh</h3>
                <h3 style={style.h3}>Github</h3>
            </div>
        )
    }
}

const style={
    navbar:{
        display:"flex",
        flexFlow:"row wrap",
        justifyContent:"space-between",
        alignItems:"center",
        height:"40px",
        width:"100%",
        backgroundColor:'black',
        color:'white'
        
    },
    line:{

    },
    h3:{
        marginTop:"10px",

    }
}
export default NavBar
