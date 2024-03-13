import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import Review from "./Review";
import ReviewForm from "./ReviewForm";

function App() {
  const [reviews, setReviews] = useState([
    {
      id: 101,
      restaurant: "MacDonalds",
      review: "The fries are good",
      rating: 5
    },
    {
      id: 102,
      restaurant: "KFC",
      review: "Finger Licking Good!",
      rating: 3.5
    },
    {
      id: 103,
      restaurant: "Burger King",
      review: "Have it your own way",
      rating: 4
    }
  ]);

  const [idBeingEdited, setIdBeingEdited] = useState(-1);

  const handleAddReview = (restaurant, review, rating) => {
    const newReview = {
      id: Math.floor(Math.random() * 1000 + 100),
      restaurant, review, rating
    };

    // const modified = reviews.slice();
    // modified.push(newReview);
    // setReviews(modified);
    setReviews([...reviews, newReview]);

  }

  const handleDeleteReview = (id) => {
    const indexToDelete = reviews.findIndex(r => r.id === id);
    const left = reviews.slice(0, indexToDelete);
    const right = reviews.slice(indexToDelete + 1);
    const modified = [...left, ...right];
    setReviews(modified);
  }

  const handleEditReview = (id) => {
    setIdBeingEdited(id);
  }

  const processEditReview = (id, restaurant, review, rating ) => {
    const modifiedReview = {
      id, restaurant, review, rating
    }

    const indexToReplace = reviews.findIndex(r => r.id === id);
    if (indexToReplace != -1) {
      const left = reviews.slice(0, indexToReplace);
      const right = reviews.slice(indexToReplace+1);
      const modified = [...left, modifiedReview, ...right];
      setReviews(modified);
    }

    setIdBeingEdited(-1);

  }

  return (
    <div className="container">
      <h1>Reviews</h1>
      {
        reviews.map((r, index) =>
          (r.id === idBeingEdited) ?
            <div className="card mt-3" key={r.id}>
              <div className="card-body">
                <ReviewForm review={r} 
                            label="Edit Review"
                            onSubmit = {(restaurant, review, rating)=>{
                              processEditReview(r.id, restaurant, review, rating)
                            }}
                            />
              </div>
            </div>
              :
              <Review key={r.id}
                review={r}
                onDelete={handleDeleteReview}
                onEdit={handleEditReview}
              />

              )
      }
              <h1>Add a New Review</h1>
              <ReviewForm onSubmit={handleAddReview}
                        label="Add Review" />
            </div>
  );
}

      export default App;
