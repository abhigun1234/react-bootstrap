import React, { Component } from 'react';

class EventHandling extends Component {
    constructor() {
        super()
        this.state={name:'raj'}
        // this.handleEvent=this.handleEvent.bind(this)
    }
    handleEvent() {
        console.log("hello",this)
        this.setState({name:'ravi'})
    }
    render() {
        return (
            <div>
                {/* <button onClick={this.handleEvent}>ok</button> */}
                <button onClick={()=>this.handleEvent()}>ok</button>
                <label>{this.state.name}</label>
            </div>
        );
    }
}

export default EventHandling;