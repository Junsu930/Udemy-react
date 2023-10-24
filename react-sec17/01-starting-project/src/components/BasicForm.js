import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredName2,
    isValid: enteredNameIsValid2,
    hasError: nameInputHasError2,
    valueChangeHandler: nameChangeHandler2,
    valueBlurHandler: nameBlurHandler2,
    reset: resetNameInput2,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));
  let formIsValid = false;

  if (enteredNameIsValid && enteredNameIsValid2 && enteredEmailIsValid)
    formIsValid = true;

  const formSubmittionHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid || !enteredNameIsValid2 || !enteredEmailIsValid) {
      return;
    }

    resetNameInput2();
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const nameInputClasses2 = nameInputHasError2
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmittionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
        </div>
        <div className={nameInputClasses2}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={nameChangeHandler2}
            onBlur={nameBlurHandler2}
            value={enteredName2}
          />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
