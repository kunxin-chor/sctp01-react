import { useContext } from "react";
import { ReviewContext } from "./ReviewContext";
import { useNavigate } from "react-router-dom";

export default function ReviewListing() {
    const context = useContext(ReviewContext);
    const navigate = useNavigate();
    return <ul className="list-group">
        {
            context.getReviews().map( r=> <li key={r._id} className="list-group-item">
                <h2>{r.restaurant}</h2>
                <div>
                    {r.review}
                </div>
                <div>
                    {r.rating}/5
                </div>

                <button className="btn btn-primary mt-3"
                    onClick={()=>{
                        navigate("/edit/" + r._id);
                    }}
                
                >Edit</button>
            </li>)
        }

    </ul>
}