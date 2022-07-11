import React, { Component } from 'react'


class Game extends Component {
   constructor(props){
    super(props)
        this.state = {
            game: true,
            score: 0,
        }

    }

   render(){
    return(
      <div> <h1>
        Your score is {this.state.score}
        </h1>
        </div>


    )
   

   }
}

export default Game