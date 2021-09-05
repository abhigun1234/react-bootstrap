import React, { Component } from 'react';

class FormsDemo extends Component {

    constructor(){

        super()
        this.state={userName:''}
        this.getName=this.getName.bind(this)
        this.submitData=this.submitData.bind(this)
    }

    // getName(){
    //     // alert('hi')
    //     console.log("this",this)
    //     console.log("name",this.state.userName)
    // }
    getName = (event) => {

        console.log("value",event.target.value)
        this.setState({ userName: event.target.value })
    }
    submitData(e){
        e.preventDefault()
        console.log("name",this.state.userName)
    }

    render() {
        return (
            <form onSubmit={this.submitData}>
            <div>
               <label>UserName</label>
               <input onChange={this.getName} value={this.state.userName} type="text" ></input> 
            </div>
            <button type="submit"> submit</button>
            </form>
        );
    }
}

export default FormsDemo;