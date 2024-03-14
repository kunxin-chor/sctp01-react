import { useLocation } from "react-router-dom"

export default function FormSubmitted() {

    const location = useLocation();
    const submittedData = location.state;


    return <>
        <h1>Thank you, {submittedData.fullName} for your feedback!</h1>
        <p>We get back to you at {submittedData.email} within three working days</p>
    </>
}