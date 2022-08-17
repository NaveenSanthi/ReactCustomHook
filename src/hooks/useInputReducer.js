import { useReducer } from "react";

const initialvalue = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "add") {
    return { value: action.value, isTouched: true };
  }
  if (action.type === "clear") {
    return { value: "", isTouched: false };
  }
  return initialvalue;
};
const useInputReducer = (values) => {
  const [inputState, dispatchInputState] = useReducer(
    inputStateReducer,
    initialvalue
  );
  const NameIsValid = values(inputState.value);
  let formIsValid = false;
  const NameInputHandler = (event) => {
    dispatchInputState({ type: "add", value: event.target.value });
  };
  if (NameIsValid) {
    formIsValid = true;
  }

  const clearForm = () => {
    dispatchInputState({ type: "clear" });

    formIsValid = false;
  };
  const displayError = !NameIsValid && inputState.isTouched;

  return {
    Name: inputState.value,
    formIsValid,
    displayError,
    NameInputHandler,
    clearForm,
  };
};

export default useInputReducer;
