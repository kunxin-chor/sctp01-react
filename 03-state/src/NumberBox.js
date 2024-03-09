import { useState } from 'react';

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

    let color = "black";
    if (count % 2 ==0) {
        color = "green";
    } else {
        color = "red";
    }

    const boxStyle = {
        width: "50px",
        height: "50px",
        border: "1px solid black",
        padding: "10px"
    }

    const getColor = () => {
        if (count % 2 == 0) {
            return "green";
        } else {
            return "red";
        }
    }

    const showIsEvenOrOdd = () => {
        if (count % 2 ==0) {
            return <p>Count is even</p>
        } else {
            return <p>Count is odd</p>
        }
    }

    const clicked = () => {
        // for React to know a state variable has changed
        // is to use the mutator function
        // setCount(count + 1); <-- not ideal if there might be a race condition
        setCount((prevCount) => prevCount + 1);
    }

    return <div style={boxStyle} onClick={clicked}>
        <p style={{
            color: getColor()
        }}>
        {count}
        </p>
        <p style={{
            color: count % 2 == 0 ? "green" : "red"
        }}>
        {count}
        </p>
        <p style={{
            color: color
        }}>{count}</p>
        {showIsEvenOrOdd()}
    </div>
}