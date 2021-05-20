import { useState } from 'react';

const useBasicForm = (validateValue) => {
  const [ enteredValue, setEnteredValue ] = useState('');
  const [ isTouched, setIsTouched ] = useState(false);

  const valueIsValid = validateValue(enteredValue)

  const hasError = !valueIsValid && isTouched

  const inputChangedHandler = (event) => {
    setEnteredValue(event.target.value)
  };

  const inputBlurHandler = () => {
    setIsTouched(true)
  };

  const reset = () => {
    setEnteredValue('')
    setIsTouched('')
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    inputChangedHandler,
    inputBlurHandler,
    reset,
  }
}

export default useBasicForm;