export default function Review(props) {
    return (
    <div className="card mt-3">
    <div className="card-body">
      <div className="card-title">
        <h4>{props.review.restaurant}</h4>
        </div>
        <p>{props.review.review}</p>
        <p>{props.review.rating}/5</p>

      <button className="btn me-2 btn-success btn-sm"
        onClick={()=>{
          props.onEdit(props.review.id)
        }}
      >Edit</button>

      <button className="btn btn-danger btn-sm"
        onClick={()=>{
          props.onDelete(props.review.id)
        }}
      >Delete</button>
    
    </div>
  </div>)
}