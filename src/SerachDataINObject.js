import React, { Component } from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

 const collection = [{ first: "Gurpreet", last: "Singh" ,age: 26,Phone: "5454545545",worked:true,days:['monday','tuesday','wednesday'], email:"koonah1161@SpeechGrammarList.com"}, 
                     { first: "Connor", last: null ,worked:true,age: 26,Phone: "5454545545",email:"koonah1161@SpeechGrammarList.com",days:['monday','tuesday','wednesday']}, 
                     { first: "Manjinder", last: "Singh",age: 26,Phone: "5454545545",worked:true,email:"koonah1161@SpeechGrammarList.com",days:['monday','tuesday','wednesday'] }
                     ,{ first: "Roja", last: "Montague" ,age: 20,Phone: "5454545545",worked:true, email:"koonah1161@SpeechGrammarList.com",days:['monday','tuesday','wednesday']}
                     ,{ first: "Raghav", last: "Montague" ,age: 26,Phone: "5454545545",worked:true, email:"koonah1161@SpeechGrammarList.com",days:['monday','saturday','wednesday']},
                     { first: "Simi", last: "Montague" ,age: 20,Phone: "5454545545", email:"koonah1161@SpeechGrammarList.com",worked:false,days:['monday','friday','wednesday']}]

 const source = { first: "Connor" }

export class SerachDataINObject extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             souureData:collection,
             Name:{ first: "Connor" },
             Result:[]
        }
        this.filterData = this.filterData.bind(this)
        this.inputOnChange = this.inputOnChange.bind(this)
    }

  inputOnChange(e){
    e.preventDefault();
      this.setState({
          Name:{ first: e.target.value }
      })
      console.log(this.state.Name.first)
  }


  filterData (){
      var src = this.state.Name
    var kayvalue = Object.keys(src)
    // console.log(kayvalue)
    var arr = collection.filter(e => {
  
     for(var i = 0; i <= kayvalue.length;i++){
      //  console.log(src.hasOwnProperty(kayvalue[i]))
       if (
          !e.hasOwnProperty(kayvalue[i]) ||
          e[kayvalue[i]] !== src[kayvalue[i]]
        ) {
          return false;
        }
       
        return true
     }  
    
    })
     var z = arr.slice().map(e => e)
     this.setState({
         Result:z
     })

    //   console.log(this.state.Name)
    // Only change code above this line
    return arr;
  }


    
    render() {
        // var wholeData = this.state.souureData
        // var serchingData = this.state.sercahingName
        return (
            <div>
                <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          value={this.state.Name.first}
          onChange={this.inputOnChange}
        //   input={<Input />}
        //   MenuProps={MenuProps}
        >
          {collection.map((e) => (
            <MenuItem key={e.last} value={e.first} >
              {e.first}
            </MenuItem>
          ))}
        </Select>
                
                <button onClick={this.filterData}> Press Me</button>
                
                <ul>{this.state.Result.map(e => {
                    if(e.worked){
                    return <span>{e.first} {e.last}<br/>{e.days.map(e => <li>{e}</li>)}</span>
                    }
                
            })}</ul>


            </div>
        )
    }
}

 const style = {
     display:"flex",
     backgroundColor:"silver",
     flexFlow:"column wrap",
     justifyContent:"center",
     width:"60%"
 }
export default SerachDataINObject
