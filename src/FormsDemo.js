import React, { Component } from 'react';

class FormsDemo extends Component {
    constructor(props){
        super(props)
        this.state={
            username:''
        }
    }
    onChangeUserName = (event) => {
        this.setState({ username: event.target.value })
    }
  handleSubmit=(event)=>{
        event.preventDefault()
      console.log("username",this.state.username)

  }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
               <label>UserName</label>
               <input type="text" value={this.state.username} onChange={this.onChangeUserName}></input> 
            </div>
            <button type="submit"> submit</button>
            </form>
        );
    }
}

export default FormsDemo;