import React, { Component } from 'react';

import ChildComp from './ChildComp';

class Parent extends Component {
    constructor(){

        super()
        this.state={parentName:'Parent'}
    }

    greetParent(str){

  console.log("greeting",str)
    }
    render() {
        return (
            <div>
               Hello 
           <ChildComp eventHandler={this.greetParent}></ChildComp>
            </div>
        );
    }
}

export default Parent;