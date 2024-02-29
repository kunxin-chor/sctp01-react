import React from 'react';
import bubbleTea from './Bubble_Tea.png';

// Being able to import a CSS file and apply its
// styling is possible because we use npx-create-react-app
import './style.css'; 

function App() {

  const h1Style = {
    "color":"red"
  }

  /* whatever JSX the component returns will be
  part of its view */
  return (
    <>
      {/* Require in an image from the directory relative to src*/}
      <img style={{
        width:"200px",
        height: "350px"
      }}src={require('./logo.svg').default} />
      <img src={bubbleTea}/>
      <img src={require('./brown-rice-milkshake.jpg')}/>
      <h1 style={h1Style}>Hello World</h1>
      {/* To add a class to an element, we use the className attribute */}
      <p className="urgent" style={{
        fontFamily:"Verdana"
      }}>Hi how are you today?</p>
    </>
  );
}

export default App;
