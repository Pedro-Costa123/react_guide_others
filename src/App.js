import React, { useState, useCallback } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";

function App() {
  const [showPar, setShowPar] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App Running");

  const toggleParHandler = useCallback(() => {
    if (allowToggle) {
      setShowPar((prevShowPar) => !prevShowPar);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPar} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
