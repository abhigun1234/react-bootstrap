import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(){
        super()
        this.state={parentName:'parent'}
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(str){

        console.log('state',str)
    }
    render() {
        return (
            <div>
                 {/* <ChildComponent greetHandler={this.greetParent}></ChildComponent> */}
                 <ChildComponent name="ravi" greetHandler={()=>this.greetParent('child')}></ChildComponent>
            </div>
        );
    }
}

export default ParentComponent;