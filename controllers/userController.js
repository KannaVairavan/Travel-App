const db = require("../models");
const router = require("../routes/api/user");
const jsonweb = require("jsonwebtoken");
const bcrypt =  require("bcrypt");
// get data and post data to User model
module.exports = {
    // Defining methods for the authController
    findById: function(req, res) {
        db.User
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        db.User
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.User
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.User
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      login: function(req,res){
        db.User
          .findOne({ username: req.body.username})
          .then(dbModel => {
            if(!dbModel){
              res.status(500).json("No user found");
            }
            let checkPassword = bcrypt.compare(req.body.password, dbModel.password);
            if(checkPassword){
              let userCheck = {username: dbModel.username, email: dbModel.email};
              let token = jwt.sign({data: userCheck}, "abcd", {maxAge:'24h'})
              res.json(token)
            }
          })
          .catch(err => res.status(422).json(err));
      },
      signup: function(req,res){
        db.User
          .create(req.body)
          .then(dbModel => {
            if(dbModel){
              let userCheck = {username: dbModel.username, email: dbModel.email};
              let cookie = jwt.sign({data: userCheck}, "abcd", {maxAge:'24h'});
              res.json(cookie)
            }
          })
          .catch(err => res.status(422).json(err));
      }      
};



