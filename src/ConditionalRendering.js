import React, { Component } from 'react';

class ConditionalRendering extends Component {
    constructor(){
        super()
        this.state={
            isLoggedIn:false
        }
    }
    changeMessage(){
    this.setState({isLoggedIn:true})
    }
    render() {
        let message
        // if(this.state.isLoggedIn){
        //     return( <div>Welcome all to react js</div>)
        // }
        // else{

        //   return(  <div>Welcome all to mern stack</div>)
        // }
     
        //2
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome all to react js</div>
        // }
        // else{
        //     message=<div>Welcome all to mern stack</div>
        // }
        // return <div>{message}</div>
        //3
        // return this.state.isLoggedIn ? <div>Welcome all to react js</div>:<div>Welcome all to mern stack</div>
      //4
      return this.state.isLoggedIn && <div>Welcome all to react js</div>
    }
}

export default ConditionalRendering;