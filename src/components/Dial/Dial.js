import React from 'react';

function Dial(props) {
    return (
        <div style={{border:'2px solid blue'}}>
            <h3>This is Dial</h3>
            <p>Steps so Far: {props.steps}</p>
        </div>
    );
}

export default Dial;