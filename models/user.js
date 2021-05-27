const mongoose = require("mongoose");
const bcrypt=require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },

  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },

  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userCreated: {
    type: Date,
    default: Date.now
  },
 
  lastUpdated: Date,

  fullName: String,
  trip:[{type:Schema.Types.ObjectId,    ref: "Trip"}]
});

UserSchema.pre('save', function(next){
  if(!this.isModified('password'))
    return next();
    bcrypt.hash(this.password,10,(err, passwordHash)=>{
      if(err)
      return next(err);
      this.password=passwordHash;
      next();
    })
});
UserSchema.methods.comparePassword=function(password,cb){
  bcrypt.compare(password, this.password, (err, isMatch)=>{
    if(err)
      return cb(err)
    else  
      if(!isMatch)
      return cb(null, isMatch);
      return cb(null, this);
  })
}
UserSchema.methods.setFullName = function() {
  this.fullName = `${this.firstName} ${this.lastName}`;

  return this.fullName;
};

UserSchema.methods.lastUpdatedDate = function() {
  this.lastUpdated = Date.now();

  return this.lastUpdated;
};

const User = mongoose.model("User", UserSchema);
const userInput={
  username:"coder1234",
  password:"1234567"
}
const user=new User(userInput);
user.save((err, document)=>{
  if(err)
  console.log(err);
  console.log(document);
})

module.exports = User;
