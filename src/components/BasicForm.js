import useInputReducer from "../hooks/useInputReducer";
const BasicForm = (props) => {
  const {
    Name: firstName,
    formIsValid: firstNameForm,
    displayError: firstNameHasError,
    NameInputHandler: firstNameInputHandler,
    clearForm: firstNameClear,
  } = useInputReducer((value) => value.trim() !== "");
  const {
    Name: lastName,
    formIsValid: lastNameForm,
    displayError: lastNameHasError,
    NameInputHandler: lastNameInputHandler,
    clearForm: lastNameClear,
  } = useInputReducer((value) => value.trim() !== "");

  const {
    Name: email,
    formIsValid: emailForm,
    displayError: emailHasError,
    NameInputHandler: emailHandler,
    clearForm: emailClear,
  } = useInputReducer((value) => value.includes("@"));

  const formValidation = !firstNameForm || !lastNameForm || !emailForm;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted");
    firstNameClear();
    lastNameClear();
    emailClear();
  };
  //First Name
  // const [fistName, setFirstName] = useState("");
  // const [firstNameIsTouched, setfirstNameIsTouched] = useState(false);

  // const fistNameIsValid = fistName.trim() !== "";

  // let formIsValid = false;

  // const firstNameInputHandler = (event) => {
  //   setfirstNameIsTouched(true);
  //   setFirstName(event.target.value);
  // };

  // if (fistNameIsValid) {
  //   formIsValid = true;
  // }
  // const displayError = !fistNameIsValid && firstNameIsTouched;

  //Second Name
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameInputHandler}
            value={firstName}
          />
          {firstNameHasError && (
            <p className="error-text">Name must not be empty</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameInputHandler}
            value={lastName}
          />
          {lastNameHasError && (
            <p className="error-text">Name must not be empty</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" onChange={emailHandler} value={email} />
        {emailHasError && <p className="error-text">Email must include '@'</p>}
      </div>
      <div className="form-actions">
        <button disabled={formValidation}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
