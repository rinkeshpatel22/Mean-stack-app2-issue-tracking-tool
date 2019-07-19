/* Library to validate input value as per the conditions */

/* email must match the valid email pattern */
let validateEmail = (email) => {
  let emailRegex =  /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm
  return email.match(emailRegex);
}

/* password length must be minimum 8 characters */
let validatePassword = (password) => {
 return (password && password.length >= 8);
}

module.exports = {
  validateEmail: validateEmail,
  validatePassword: validatePassword
}
