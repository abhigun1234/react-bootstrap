import React, { Component } from 'react';
import ChildData from './ChildData';

class ParentData extends Component {
    constructor(){

        super()
        this.state={name:'parent'}
    }

    greetingParentComp(str){


        console.log("hello",str)
    }
    render() {
        return (
            <div>
                Hello Parent
                <ChildData  messageHandler={this.greetingParentComp}  name="abhi"></ChildData>
            </div>
        );
    }
}

export default ParentData;