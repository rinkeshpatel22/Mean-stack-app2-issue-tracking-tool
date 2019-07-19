const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
    index: true,
    default: ''
  },
  userName:{
    type: String,
    required: true,
    default: ''
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    default: 'password'
  },
  createdOn: {
    type: Date,
    required: true,
    default: ''
  }
});

mongoose.model('User', userSchema);