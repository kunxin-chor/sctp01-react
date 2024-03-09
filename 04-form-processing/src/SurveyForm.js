import { useState } from 'react'

export default function SurveyForm() {

    // ask the user for their name, their favorite color
    // and which country they are from
    const [name, setName] = useState("");
    const [colour, setColour] = useState("");
    const [country, setCountry] = useState("singapore");
    const [fruits, setFruits] = useState([]);

    const handleCheckBoxChange = (event) => {

        if (event.target.checked) {
            // how to add a value to a state variable which is an array

            // Entry level method:
            // 1. clone the array
            // const cloned = fruits.slice();

            // // 2. update the clone
            // cloned.push(event.target.value);

            // // 3. replace the clone into the state
            // setFruits(cloned);

            // Preferred method:
            const cloned = [...fruits, event.target.value];
            setFruits(cloned);
        } else {

            // INELEGANT METHOD:
            // 1. clone the array
            // const cloned = fruits.slice();

            // // 2. find the index of the element we are removing
            // const indexToRemove = fruits.findIndex(f => f == event.target.value);

            // // 3. delete the index from the cloned array
            // cloned.splice(indexToRemove, 1);

            // // 4. replace the modified array into the state
            // setFruits(cloned);

            const indexToRemove = fruits.findIndex(f => f == event.target.value);

            const cloned = [ ...fruits.slice(0, indexToRemove), 
                             ...fruits.slice(indexToRemove + 1)
            ]

            setFruits(cloned);
        }


    }

    return <>
        <h1>Survey Form</h1>
        <div>
            <label>Name</label>
            <input type="text"
                className="form-control"
                value={name}
                onChange={(event) => {
                    // all `onChange` event handlers take one parameter
                    // - the event. The event contains every info about the change
                    // like which key is pressed, which form control etc. etc.
                    setName(() => event.target.value);
                    // this is ok: setName(event.target.value)
                }}
            />
        </div>
        <div>
            <label>Favorite Color:</label>
            <input type="radio"
                value="red"
                className="ms-2 me-2"
                name="colour"
                checked={colour == "red"}
                onChange={() => {
                    setColour("red")
                }}
            />
            <label>Red</label>
            <input type="radio"
                value="green"
                className="ms-2 me-2"
                name="colour"
                checked={colour == "green"}
                onChange={() => {
                    setColour("green");
                }}
            />
            <label>Green</label>
            <input type="radio"
                value="blue"
                className="ms-2 me-2"
                name="colour"
                checked={colour == "blue"}
                onChange={() => {
                    setColour("blue")
                }}
            /><label>Blue</label>
        </div>
        <div>
            <label>Country</label>
            <select value={country} className="form-control" onChange={(event) => {
                setCountry(event.target.value)
            }}>
                <option value="singapore">Singapore</option>
                <option value="malaysia">Malaysia</option>
                <option value="indonesia">Indonesia</option>
            </select>
        </div>
        <div>
            <label>Fruits</label>

            <input type="checkbox"
                name="fruits"
                value="apple"
                checked={fruits.includes("apple")}
                onChange={handleCheckBoxChange}
            />
            <label>Apple</label>

            <input type="checkbox"
                name="fruits"
                value="orange"
                checked={fruits.includes("orange")}
                onChange={handleCheckBoxChange}
            />
            <label>Orange</label>

            <input type="checkbox"
                name="fruits"
                value="pineapple"
                checked={fruits.includes("pineapple")}
                onChange={handleCheckBoxChange}
            />
            <label>Pineapple</label>

            <input type="checkbox"
                name="fruits"
                value="durian"
                checked={fruits.includes("durian")}
                onChange={handleCheckBoxChange}
            />
            <label>Durian</label>

        </div>
    </>
}