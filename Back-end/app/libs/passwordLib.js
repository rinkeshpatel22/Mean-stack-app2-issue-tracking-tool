/* library to compare password */
const bcrypt = require('bcryptjs');
const loggerLib = require('../libs/loggerLib');
const saltRounds = 10;

/* function to hash password */
let hashpassword = (myPlaintextPassword) => {
  let salt = bcrypt.genSaltSync(saltRounds);
  let hash = bcrypt.hashSync(myPlaintextPassword, salt);
  return hash;
}

/* function to compare password */
let comparePassword = (oldPassword, hashpassword, cb) => {
  bcrypt.compare(oldPassword, hashpassword, (err, res) => {
    if (err) {
      loggerLib.error(err.message, 'Comparison Error', 5);
      cb(err, null);
    } else {
      cb(null, res);
    }
  })
}

module.exports = {
  hashpassword: hashpassword,
  comparePassword: comparePassword
}
