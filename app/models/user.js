var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  npm : Number,
  nama : String,
  kelas : String
});

module.exports = mongoose.model('User', UserSchema);
