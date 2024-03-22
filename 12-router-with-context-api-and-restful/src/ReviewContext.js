import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
export const ReviewContext = createContext();

const BASE_API_URL = "https://kcx-rest-reviews-api.onrender.com"

export default function ReviewContextData(props) {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        const loadData = async () => {
            const response = await axios.get(BASE_API_URL + "/reviews");
            setReviews(response.data);
        }
        loadData(); 
    }, [])

    const context = {
        getReviews:() => {
            // todo: set a timer like every 10 minutes fetch all new reviews
            return reviews
        },
        async addReview(newReview) {
            const response = await axios.post(BASE_API_URL + "/reviews", {
                ...newReview,
                rating: parseInt(newReview.rating)
            });

            newReview._id = response.data.insertedId;
            setReviews([...reviews, newReview]);
        },
        getReviewById(reviewId) {
            return reviews.find(r => r._id === reviewId);
        },
        async updateReviewById(reviewId, newReview) {

            const response = await axios.put(BASE_API_URL + "/reviews/" + reviewId,{
                ...newReview,
                rating: parseInt(newReview.rating)
            });

            newReview._id = reviewId
    
            const index = reviews.findIndex( r => r._id === reviewId);
            const left = [...reviews.slice(0, index)];
            const right = [...reviews.slice(index+1)];
            const modified  =[ ...left, newReview, ...right];
   
            setReviews(modified);
        }
    }

    return <ReviewContext.Provider value={context}>
       {props.children}
    </ReviewContext.Provider>
}