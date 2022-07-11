import React,{ Component} from 'react'

class Rando extends Component{
    constructor(props){
        super(props)

        this.state = {
            number: 1 
        }
        this.makeTimer = this.makeTimer.bind(this)
    }
    

 makeTimer(){
        //every 2 seconds pick a random number b/c state and max number
    let rand = Math.floor(Math.random() * 10)    
       this.setState({number: rand})

       
    }
    render(){
        return(
            <div>
                <h1> Number is {this.state.number} </h1>
                 <button onClick={this.makeTimer}>Random number</button>
            </div>
           
        )
    }
}

export default Rando