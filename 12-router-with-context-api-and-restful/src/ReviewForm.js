import { useState } from "react"

export default function ReviewForm(props) {
    const [formState, setFormState] = useState({
        'restaurant': props.initialValue?.restaurant ?? '',
        'review': props.initialValue?.review ?? '',
        'rating': props.initialValue?.rating ?? 1
    });

    const [errors, setErrors] = useState ({
        'restaurant':'',
        'review':'',
        'rating':''
    })
    
    const handleFormField = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = (event) => {
        const newErrors = {
            'restaurant':'',
            'review':'',
            'rating':''
        }
        if (formState.rating < 1|| formState.rating > 5) {
            newErrors.rating = "Rating must be between 1 to 5"
        }

        setErrors(newErrors);

        if (!newErrors.restaurant && !newErrors.review && !newErrors.rating) {
            props.onSubmit(formState);
        }
    }

    return <>
        <div>
            <label>Restaurant Name</label>
            <input type="text" 
                   name="restaurant"
                   value={formState.restaurant}
                   className="form-control"
                   onChange={handleFormField}
            /> 
        </div>

        <div>
            <label>Review</label>
            <textarea
                   name="review"
                   value={formState.review}     
                   className="form-control"
                   onChange={handleFormField}
            ></textarea>
        </div>

        <div>
            <label>Review</label>
            <input type="number"
                   name="rating"
                   value={formState.rating}     
                   className="form-control"
                   onChange={handleFormField}
            />
            {
                errors.rating && <div className="invalid-feedback d-block">
                        {errors.rating}
                    </div>
            }
        </div>

        <button className="btn btn-primary mt-3"
                onClick={submitForm}
        >{props.label ?? "Submit"}</button>
    </>

}