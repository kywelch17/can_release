export const loginErrors = (user) => {
    const { email, password } = user;
    const errors = [];

    if (email.length == 0 || password.length == 0) {
        errors.push('All fields must be filled out');
    }

    return errors;
}

export const registerErrors = (user) => {
    const { name, email, password, passwordConfirm } = user;
    const errors = [];

    if (name.length === 0 || email.length === 0 || password.length === 0 || passwordConfirm.length === 0) {
      errors.push('All fields must be filled out');
      return errors;
    }
  
    if (email.length < 5) {
      errors.push("Email should be at least 5 charcters long");
    }
    
    if (email.split("").filter(x => x === "@").length !== 1) {
      errors.push("Email should contain a @");
    }
  
    if (password.length < 6) {
      errors.push("Password should be at least 6 characters long");
    }

    if (password !== passwordConfirm) {
      errors.push(`Password confirmation don't match`);
    }
  
    return errors;
}