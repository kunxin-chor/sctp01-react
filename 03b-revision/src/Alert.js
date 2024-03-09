function Alert(props) {
    return <div style={{
        border:"1px solid black",
        margin:"10px",
        backgroundColor: props.bgcolor
    }}>
        <p>{props.msg}</p>
      Hello World, your lucky number is {Math.floor(Math.random() * 100 + 1)}
    </div>
  }

  export default Alert;