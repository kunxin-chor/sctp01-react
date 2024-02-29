import Shout from "./components/Shout";
import SumOfTwo from "./components/SumOfTwo";

function App() {
  return (
    <>
      <Shout msg="hello world"/>
      <SumOfTwo n1={2} n2={3}/>
      <SumOfTwo n1={parseInt("3")} n2={parseInt("4")}/>
    </>
  );
}

export default App;
