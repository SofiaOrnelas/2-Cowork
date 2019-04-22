const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String, required:true, unique:true},
  password: {
    type: String, required:true},
    idAdmin: {
    type: Boolean,
    defaultValue: false
    },
  role: {
    type: String,
    default: "user"
    },
  confirmationCode: {
    type:String,
    unique:true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
