import { useState } from "react";

import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changedTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && (
        <Output>
          <p>It's good to see you!</p>
        </Output>
      )}
      {changedText && (
        <Output>
          <p>Changed!</p>
        </Output>
      )}
      <button onClick={changedTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
