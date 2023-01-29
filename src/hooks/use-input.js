import { useState } from "react";

const useInput = (validadeValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setisTouched] = useState(false);

  const valueIsValid = validadeValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setisTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setisTouched(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
