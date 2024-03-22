import ReviewContextData from "./ReviewContext"
import "bootstrap/dist/css/bootstrap.min.css"

import {
  BrowserRouter as Router, Routes, Route, Link
} from 'react-router-dom'
import ReviewListingPage from "./page/ReviewListingPage"
import AddReviewPage from "./page/AddReviewPage"
import EditReviewPage from "./page/EditReviewPage"

export default function App() {
  return <div className="container">
    <ReviewContextData>
      <Router>
        <nav className="navbar navbar-expand-sm bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">All Reviews</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add Review</Link>
              </li>
            </ul>
          </div>

        </nav>
        <Routes>
          <Route path="/" element={<ReviewListingPage />} />
          <Route path="/add" element={<AddReviewPage />} />
          <Route path="/edit/:reviewId" element={<EditReviewPage/>} />
        </Routes>
      </Router>
    </ReviewContextData>

  </div>
}