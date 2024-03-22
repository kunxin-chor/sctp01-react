import { useParams, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { ReviewContext } from "../ReviewContext";
import ReviewForm from "../ReviewForm";

export default function EditReviewPage() {
    
    const params = useParams();
    const navigate = useNavigate();
    const reviewId = params.reviewId;

    const context = useContext(ReviewContext);
    const reviewToEdit = context.getReviewById(reviewId);

    return <>
        <h1>Editing Review: {reviewToEdit.restaurant}</h1>
        <ReviewForm initialValue={reviewToEdit}
                    label="Edit Review"
                    onSubmit={(review)=>{
                        context.updateReviewById(reviewId, review)
                        navigate('/')
                     }}
        />
    </>
}