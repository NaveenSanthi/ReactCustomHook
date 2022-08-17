import { useState } from "react";

const useInput = (values) => {
  const [Name, setName] = useState("");
  const [NameIsTouched, setNameIsTouched] = useState(false);
  const NameIsValid = values(Name);
  let formIsValid = false;
  const NameInputHandler = (event) => {
    setNameIsTouched(true);
    setName(event.target.value);
  };
  if (NameIsValid) {
    formIsValid = true;
  }

  const clearForm = () => {
    setName("");
    formIsValid = false;
    setNameIsTouched(false);
  };
  const displayError = !NameIsValid && NameIsTouched;

  return {
    Name,
    formIsValid,
    displayError,
    NameInputHandler,
    clearForm,
  };
};

export default useInput;
