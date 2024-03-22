import { useEffect, useState } from "react";
import ReviewListing from "../ReviewListing";
import { useLocation } from "react-router-dom";


export default function ReviewListingPage() {

    const [showFlash, setShowFlash] = useState(true);
    const location = useLocation(); 

    useEffect(()=>{
        if (location.state?.message) {
            setTimeout(()=>{
                setShowFlash(false);
            }, 5000)
        }
    }, [])

    return <>
        {
            location.state?.message && showFlash && <div className="alert alert-success">
                {location.state.message}
            </div>
        }
        <h1>All Reviews</h1>
        <ReviewListing/>
    </>
}