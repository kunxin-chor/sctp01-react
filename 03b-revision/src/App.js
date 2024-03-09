import logo from './logo.svg';
import './App.css';
import Alert from './Alert';
import ColorSwitch from './ColorSwitch';


function App() {
  return (
    <>
      <p>{2+2}</p>
      <p>{"quick brown fox".toUpperCase()}</p>
      <p>Not</p>
      <Alert msg="AWAS AWAS" bgcolor="red"/>
      <Alert msg="Chicken Rice"/>
      <p>Allowed</p>
      <ColorSwitch/>
    </>
  );
}

export default App;
