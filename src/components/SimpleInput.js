import React, { useState, useEffect } from "react";
const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [nameFieldIsTouched, setNameField] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const inputChangeHandler = (event) => {
    setNameField(true);
    setName(event.target.value);
    if (event.target.value.trim() === "") {
      setNameValid(false);
      setFormValid(false);
      return;
    }
    setNameValid(true);
  };
  useEffect(() => {
    if (nameValid) {
      setFormValid(true);
    }
  }, [nameValid]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setNameField(true);
    if (name.trim() === "") {
      setNameValid(false);
      return;
    }
    setNameValid(true);
    nameFieldIsTouched(false);
    console.log(name);
  };
  const nameInputIsValid = nameFieldIsTouched && !nameValid;
  const className = nameInputIsValid ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={className}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={inputChangeHandler} />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
