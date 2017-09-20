const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

//create new user model
var UserSchema = new Schema({
  username: {type: String, lowercase: true, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String, required: true, lowercase: true, unique: true}
})

//search mongoose for mongoose presave. Before saving password use bcrypt
UserSchema.pre('save', function(next) {
  const user = this
  bcrypt.hash(user.password, null, null, function(err, hash){
    if(err) return next(err)
    user.password = hash;
      next();
  });

});

UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

//export to server file
module.exports = mongoose.model('User', UserSchema)
//name your model User and then call by variable name userSchema
//must require User this in server.js
