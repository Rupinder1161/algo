import React, { Component } from 'react'

export class DonutChart extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
   
  }

 
  
  render() {
    return (
      <div>
        <h3 style={style} onClick={this.addClass}>hello</h3>
      </div>
    )
  }
}

const style ={

  border:"3px solid red",
  
}
export default DonutChart