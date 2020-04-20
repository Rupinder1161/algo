import React, { Component } from 'react'


// var totalDistnace = [10][10];
// var shipOne = [0][0]
// var shiptwo = [0][0]


export class DistanceCaluclation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             shipone:'',
             shiptwo:'',
             origin:'',
             Distnaceshipone:'',
             Distnaceshiptwo:''
        }
        this.getRandomInt = this.getRandomInt.bind(this)
    }


     getRandomInt() {

          var ships = []
          for (var i = 1 ; i <= 6 ; i++){
              ships.push(Math.floor(Math.random() * 10))   
          }

          var distant1 = ships[4] + ships[0]
          console.log(distant1)
          var distnat2 = ships[5] + ships[1]
          console.log(distnat2)
           
          var distant3 = ships[4] + ships[2]
          var distnat4 = ships[5] + ships[3]

         var Distnace = (1/2) * (Math.pow(distant1, 2) + Math.pow(distnat2 , 2))
         var Distnace2 = (1/2) * (Math.pow(distant3, 2) + Math.pow(distnat4 , 2))
        //  ( (Math.pow(ships[5] - ships[0], 2) - ( Math.pow((ships[5]) - (ships[1]) , 2))))

         this.setState({
             shipone:`${ships[0]}  ${ships[1]}`,
             shiptwo:`${ships[2]}  ${ships[3]}`,
             orgin:`${ships[4]}  ${ships[5]}`,
             Distnaceshipone:Distnace ,
             Distnaceshiptwo: Distnace2 
            }
         )
        
      }

  
    render() {
        
        // var ship2 = setInterval(this.getRandomInt(20),1000)
        return (
            <div>
                <h1>Ship One :{this.state.shipone}</h1> <h1>Ship Two :{this.state.shiptwo}</h1>
        <h1>Your Ship :{this.state.orgin}</h1>
        <h1> distance {this.state.Distnaceshipone}</h1>

        <h1> distance {this.state.Distnaceshiptwo}</h1>
               <button onClick={this.getRandomInt}>Press this</button>
                  {/* {setInterval(this.getRandomInt(20),1000)} */}
            </div>
        )
    }
}

export default DistanceCaluclation
