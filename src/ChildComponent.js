import React from 'react';

function ChildComponent(props) {
    return (
        <div>
            {props.name}
             <button onClick={props.greetHandler}>greet parent</button>
        </div>
    );
}

export default ChildComponent;