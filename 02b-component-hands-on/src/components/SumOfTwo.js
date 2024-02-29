export default function SumOfTwo(props) {
    return <h1>
        {props.n1} + {props.n2} = {parseInt(props.n1) + parseInt(props.n2)} 
    </h1>
}