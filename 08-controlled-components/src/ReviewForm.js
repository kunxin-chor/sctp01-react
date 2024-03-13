import {useState} from 'react';

export default function ReviewForm(props) {

    const [restaurant, setRestaurant] = useState( props.review?.restaurant ?? "");
    const [review, setReview] = useState( props.review?.review ?? "");
    const [rating, setRating] = useState( props.review?.rating ?? 1);

    return <div>
        <div>
            <label>Restaurant Name</label>
            <input type="text" 
                   className="form-control"
                   value={restaurant}
                   onChange={e=>setRestaurant(e.target.value)}
                   />
        </div>
        <div>
            <label>Review</label>
            <input type="text" 
                   className="form-control"
                   value={review}
                   onChange={e=>setReview(e.target.value)}
                   />
        </div>
        <div>
            <label>Rating</label>
            <input type="text" 
                   className="form-control"
                   value={rating}
                   onChange={e=>setRating(e.target.value)}
            />
        </div>
        <button className="btn btn-primary mt-3"
                onClick={()=>{
                    props.onSubmit(restaurant, review, rating)
                }}

        >{props.label}</button>
    </div>
}
