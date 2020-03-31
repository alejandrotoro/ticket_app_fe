export const validateInputs = (userData, setError) => {
  const { username, password, role } = userData;
  
  let errorMsg = {
    usernameError: '',
    passwordError: '',
    roleError: ''
  }

  let formValid = true;

  if(!username) {
    formValid = false;
    errorMsg.usernameError = "Type your username";
  }

  if(typeof username !== undefined) {
    if(username.length <= 3 || username.length > 8) {
      formValid = false;
      errorMsg.usernameError = "The username must be between 4 and 8 characters";
    }
  }

  if(!password) {
    formValid = false;
    errorMsg.passwordError = "Type your password";
  }

  if(typeof password !== undefined) {
    if(!password.match(/^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[a-z]).*$/)) {
      formValid = false;
      errorMsg.passwordError = "The password must start with a number and have at least 6 characters";
    }
  }

  if(role === '') {
    formValid = false;
    errorMsg.roleError = "Please select one role";
  }

  setError(errorMsg);
  console.log("form Valid: ", formValid);
  return formValid;
}