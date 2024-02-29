function ImageFrame(props) {
    return <>
    <figure>
        <img src={props.img} 
             alt={props.alt}
             style={{
                border:"1px solid black",
                padding:"10px"
             }}
             />
        <figcaption>{props.alt}</figcaption>
    </figure>
    </>
}
export default ImageFrame;