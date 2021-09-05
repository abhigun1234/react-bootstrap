import React from 'react';

function ChildData(props) {
    return (
        <div>
           {props.name} 
           <button onClick={()=>props.messageHandler('parent how are you')}>callParent</button>
        </div>
    );
}

export default ChildData;