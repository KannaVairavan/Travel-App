const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

  

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: true,
   
  },

    date: {
      type: Date,
      default: Date.now
    },
  
   
    
    
    fullName: String,
  
  
  });


  UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  // will encrypt password everytime its saved
  UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
  
const User = mongoose.model("User", UserSchema);

module.exports = User;
