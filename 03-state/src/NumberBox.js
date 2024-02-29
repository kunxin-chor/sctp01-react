import {useState} from 'react';

export default function NumberBox() {

    // useState is one of the many React hooks
    // a react hook is a function that provide
    // some React features.
    
    // useState registers a state variable for the component
    // The only parameter is the starting value of the state variable
    // The returns:
    //  1. The current value of the state variable
    //  2. A function to modify the value of the state variable
    //     (also known as a mutator function)
    let [count, setCount] = useState(0);

    const boxStyle = {
        width: "50px",
        height: "50px",
        border: "1px solid black",
        padding: "10px"
    }

    const clicked = () => {
        // for React to know a state variable has changed
        // is to use the mutator function
        // setCount(count + 1); <-- not ideal
        setCount( ()=>{
            count + 1
        })
    }

    return <div style={boxStyle} onClick={clicked}

    >
        {count}
    </div>
}