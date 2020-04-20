import React, { Component } from 'react'


const vowelRgex = /[aeiou]/ig;
export class Chracterfiltering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             totalWords:'',
             words:'',
             replace:'',
             findThematch:'',
             totalworld:''

        }
        this.changeData = this.changeData.bind(this)
        this.findmatch = this.findmatch.bind(this)
        this.replace =this.replace.bind(this)
        this.cool = this.cool.bind(this)
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
    replace(e){
        this.setState({
            replace:e.target.value
        }) 
    }
   
     cool(){
        var search_term = new RegExp(this.state.findThematch, "ig")
        var replacingWords = this.state.replace
        // var incomingData = this.state.words.split(' ').length
        // console.log(incomingData)
        console.log( this.state.words.split(' ').map( e => e.replace(search_term,replacingWords)).join(' ') )
         var l = this.state.words.split(' ').map( e => e.replace(search_term,replacingWords)).join(' ')
        // console.log(l)
        // var m  =  this.state.words.replace(search_term,this.state.replace)
        this.setState({
            words:l,
            // totalworld:incomingData
        })
        // console.log(m)
         }
    render() {
        var search_term = new RegExp(this.state.findThematch, "ig")
        // var incomingData = this.state.words.split(' ').length
         
        var zlength =  this.state.words.split(' ').length
        var z = this.state.words.split(' ').map(e => e.match(search_term))
        console.log(z)
        return (
            <div style={{ width:"100%"}}>
                  <textarea rows="2" cols="20" wrap="hard" style={{width:"100%"}} onChange={this.changeData} value={this.state.words}></textarea>
                  <section style={style}>
                  <h4> Total Charactors :{this.state.words.length}</h4>   
                  <h4> Total Words :{zlength}</h4> 
                  </section>  
                  <section style={style}>
                  <input  style={style2} onChange={this.findmatch} value={this.state.findThematch} ></input>  
                  <input style={style2} onChange={this.replace} value={this.state.replace} ></input> 
                  <button onClick={this.cool}> Replace</button>
                  </section>  
                  
                  {/* <h2> total number of Vowels are :{this.state.vowel.length}</h2> */}
                  {/* {z} */}
                  {/* {this.state.totalWords} */}
                 <h5>{z}</h5> 
                  <h3 style={h2}>{this.state.words}</h3>
            </div>
        )
    }
}

const style ={ display:"flex",flexFlow:"row wrap",width:"100%",justifyContent:"space-around"}
const style2 ={width:"45%",justifyContent:"center",marginTop:"10px",height:"40px"}
const h2 = {textAlign:"justify",margin: '10px'}
export default Chracterfiltering
