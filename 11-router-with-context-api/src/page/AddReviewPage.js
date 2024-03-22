import { useContext } from "react";
import ReviewForm from "../ReviewForm";
import { ReviewContext } from "../ReviewContext";
import { useNavigate } from "react-router-dom";

export default function AddReviewPage() {

    const context = useContext(ReviewContext);
    const navigate = useNavigate();

    return <>
        <h1>Add Review</h1>
        <ReviewForm
            label="Add Review"
            onSubmit={(review) => {
                context.addReview(review);
                navigate('/', {
                    'state': {
                        'message': 'New review has been added'
                    }
                });
            }} />
    </>
}