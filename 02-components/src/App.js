import ImageFrame from "./ImageFrame";
import puppy from "./puppy.jpg";
import merlion from "./merlion.jpg";

function sayGoodbye() {
  return "Bye Bye";
}

function displayHeader() {
  return <h1>About Me</h1>
}

// a component in React
// 1. is a function
// 2. first alphabet of the function name must be upper case
// 3. returns JSX
function Alert(props) {

  // set the bgColor to yellow by default
  let bgColor = "yellow";
  if (props.bgColor) {
    bgColor = props.bgColor;
  }

  return <div style={{
    backgroundColor: bgColor,
    padding: "10px",
    margin: "5px",
    borderRadius:"10px"
  }}>{props.msg ?? "Default"}</div>
}

const Footer = () => <p>(C) 2023</p>

const f = <p>Foobar</p>;

function App() {
  return (
      <>
      <ImageFrame img={puppy} alt="Good Boi"/> 
      <ImageFrame img={merlion} alt="Vomitting Cat-Lion-Fish"/>
      <h1>{sayGoodbye()}</h1>

      {displayHeader()}
      <Alert msg="AWAS AWAS" bgColor="red"/>
      <Alert msg="Success checking out!" bgColor="green"/>
      <Footer/>
      {f}
      </>
  );
}

export default App;
