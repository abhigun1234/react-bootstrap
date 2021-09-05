import React from 'react';

function ChildComp(props) {
    return (
        <div>
            {/* <button onClick={props.eventHandler}>greetParent</button> */}
            <button onClick={()=>props.eventHandler("hi")}>greetParent</button>
        </div>
    );
}

export default ChildComp;