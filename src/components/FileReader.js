import React, { Component } from 'react'


export class FileReader extends Component {
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
        var search_term = new RegExp(/^[^aeiou]/, "ig")
        
        var z = [];
          z =  this.state.words.match(search_term)
          var l = this.state.words.replace(search_term,'').concat("ay")
       console.log(z)
        return (
            <div style={style}>
                  <textarea rows="2" cols="20" wrap="hard" style={{width:"100%"}} onChange={this.changeData} value={this.state.words}></textarea>
                  {/* <input style={{ width:"50%",marginTop:'10px'}} onChange={this.findmatch} value={this.state.findThematch}></input> */}
                  <section style={style}>
                  <h3> Putin Latin words</h3><br/>   
                  </section>
                  <h4>{l}</h4>
            </div>
        )
    }
}

const style ={ display:"flex",flexFlow:"row wrap",width:"100%",justifyContent:"center"}
export default FileReader
