import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";

function App() {
  const [showPar, setShowPar] = useState(false);

  console.log("App Runnig");

  const toggleParHandler = () => {
    setShowPar((prevShowPar) => !prevShowPar);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPar}/>
      <Button onClick={toggleParHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
