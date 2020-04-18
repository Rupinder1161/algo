import React, { Component } from 'react'


const vowelRgex = /[aeiou]/ig;
export class Chracterfiltering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             totalWords:'',
             words:'',
             vowel:'',
             findThematch:''
        }
        this.changeData = this.changeData.bind(this)
        this.findmatch = this.findmatch.bind(this)
    }
    
    changeData (e){
        this.setState({
            words:e.target.value,
        })   
    }

    findmatch(e){
        this.setState({
            findThematch:e.target.value
        })
    }

   
    render() {
        var search_term = new RegExp(/[aeiou]/, "ig")
        
        var z = [];
          z =  this.state.words.match(search_term)
       console.log(z)
        return (
            <div style={style}>
                  <textarea rows="2" cols="20" wrap="hard" style={{width:"100%"}} onChange={this.changeData} value={this.state.words}></textarea>
                  <input style={{ width:"50%",marginTop:'10px'}} onChange={this.findmatch} value={this.state.findThematch}></input>
                  <h2> total number of words are :{this.state.words.length}</h2>
                  {/* <h2> total number of Vowels are :{z.length}</h2> */}
        <h2> total number of Vowels are :{z}</h2>
            </div>
        )
    }
}

const style ={ display:"flex",flexFlow:"row wrap",justifyContent:"center"}
export default Chracterfiltering
