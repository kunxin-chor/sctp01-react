import {useState} from 'react';

export default function ColorSwitch () {

    console.log("Re-rendering ColorSwitch");

    // create a state variable using the `useState` hook
    // the very first time the component is drawn,
    // the first argument will be the default value
    //
    // useState returns two results
    // result 1: the current value of the state variable
    // result 2: a function to change the state value
    let [color, setColor] = useState('white');
    let [clickCount, setClickCount] = useState(0);

    //  event handler in React MUST be arrow function
    const redButtonClick = () => {
      setColor('red');
      setClickCount(clickCount+1);
    }

    return <div>
        <div style={{
            width:"150px",
            height:"50px",
            border:"1px solid black",
            backgroundColor: color
        }}>
            Click Count: {clickCount}
        </div>
        <button onClick={redButtonClick}>Red</button>
        <button onClick={()=>{
            setColor("blue")
        }}>Blue</button>
        <button>Green</button>
    </div>
}

