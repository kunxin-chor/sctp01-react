import { useState, createContext } from 'react';

export const ReviewContext = createContext();

export default function ReviewContextData(props) {
    const [reviews, setReviews] = useState([
        {
            "_id": 1,
            "restaurant": "McDonalds",
            "review": "Fries are very hot and cruncy",
            "rating": 4
        },
        {
            "_id": 2,
            "restaurant": "Burger King",
            "review": "Have it your way",
            "rating": 4
        },
        {
            "_id": 3,
            "restaurant": "KFC",
            "review": "Finger Licking Good",
            "rating": 4
        },
        
    ]);

    const context = {
        getReviews:() => {
            return reviews
        },
        addReview(newReview) {
            newReview._id = Math.floor(Math.random() * 10000 + 9999);
            setReviews([...reviews, newReview]);
        },
        getReviewById(reviewId) {
            return reviews.find(r => r._id === parseInt(reviewId));
        },
        updateReviewById(reviewId, newReview) {
            newReview._id = parseInt(reviewId);
    
            const index = reviews.findIndex( r => r._id === parseInt(reviewId));
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