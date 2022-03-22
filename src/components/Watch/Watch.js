import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {

    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        setSteps(steps + 1);
        // console.log(steps);
    }

    useEffect(() => {
       
        console.log(steps)

    },[steps])

    const decreaseSteps = () => {
        if (steps > 0) {

            setSteps(steps - 1);
            
        }
    }

    return (
        <div style={{border:'2px solid purple', margin:'10px',padding:'10px'}}>
            <h2>This is my smart watch</h2>
            <p>My current step {steps}</p>
            <button onClick={increaseSteps}>Step Up</button>
            <button onClick={decreaseSteps}>Step Down</button>
            <Display name="Germin" steps={steps}></Display>
            
        </div>
    );
};

export default Watch;