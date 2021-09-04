import React from 'react';
import ChildComponent from './ChildComponent';

function ParentC(props) {

    function greetParent(str){

        console.log("greet parent")
    }
    return (
        <div>
            <ChildComponent greetHandler={()=>this.greetParent('child')}></ChildComponent>
        </div>
    );
}

export default ParentC;