import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactUs() {

    // Hooks must cannot be created inside a if, while, for
    // or another nested function
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        'fullName': '',
        'email':''
    });

    const updateFormField = (e) => {
        const keyBeingChanged = e.target.name;
        const newValue = e.target.value;
        setFormState({
            ...formState,
            [keyBeingChanged]: newValue
        })
    }
 
    return <>
        <h1>Contact Us</h1>
        <div>
            <div>
                <label>Full Name</label>
                <input type="text" 
                       name="fullName"
                       className="form-control"
                       value={formState.fullName}
                       onChange={updateFormField}
                       />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" 
                       name="email"
                       className="form-control"
                       value={formState.email}
                       onChange={updateFormField}
                       />
            </div>
            <button className="btn btn-primary mt-3"
                    onClick={()=>{
                        // go to the URL "/form-submitted"
                        navigate("/form-submitted", {
                            state: formState
                        })
                    }}
            >Submit</button>
        </div>
    </>
}