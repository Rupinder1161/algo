import React, { Component } from 'react'

export class SpinalCaseTextConverson extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             totalWords:'',
             words:''
        }
        this.changeData = this.changeData.bind(this)
    }
    
    changeData (e){
        this.setState({
            words:e.target.value,
        })
        console.log(this.state.words.length)
    }
    render() {
        return (
            <div>
               <input style={{ width:"50%"}} onChange={this.changeData} value={this.state.words}></input>
        <h2> total number of words are :{this.state.words.length}</h2>
            </div>
        )
    }
}

export default SpinalCaseTextConverson
