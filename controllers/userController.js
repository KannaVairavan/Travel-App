const db = require("../models");
const router = require("../routes/api/user");
const jwt = require("jsonwebtoken");
const bcrypt =  require("bcrypt");
const token = require("../auth/generateToken");
// get data and post data to User model

const signJwt = (id) => {
  return jwt.sign({id}, "abc", {
    expiresIn:'14d' 
  })
};

const sendToken = (user, statusCode, req, res ) => {
  const token = signJwt(user._id)
  res.cookie('jwt', token, {
    expires: new Date(Date.now() + '14d'),
    secure: true,
    httpOnly: true
  });

  user.password = undefined;
  res,status(status).json({
    status: 'success',
    token,
    user,
  })
}
const encryptPw = async (password) => {
  return await bcrypt.hash(password, 12)
}

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
          .findOne({ email: req.body.email})
          .then(dbModel => {
            if(!dbModel){
              res.status(500).json("No user found");
            }
            let checkPassword = bcrypt.compare(req.body.password, dbModel.password);
            if(checkPassword){
              let userCheck = {email: dbModel.email};
              // let token = jwt.sign({data: userCheck}, "abcd", {maxAge:'24h'})
              
              res.json(token)
            }
          })
          .catch(err => res.status(422).json(err));
      },
      signup: async (req,res) => {
        const { firstName, lastName, email, password} = req.body;
        const pw = encryptPw(password)
        try {
        // db.User
          // .create(req.body)
          // .then(dbModel => {
          //   if(dbModel){
          //     // let userCheck = {email: dbModel.email};
          //     // let cookie = jwt.sign({data: userCheck}, config.get("abcd"), {expiresIn: 3600});

          //     res.status(201).json({
          //         id: dbModel.id,
          //         email: dbModel.email,
          //         token: generateToken(dbModel.email)
          //       })
          //     }
          // })

          const newUser = await db.User.create ({
            firstName,
            lastName,
            email,
            password: pw,
          });
          sendToken(newUser, 201, req, res)
        }
          catch(err){ res.status(422).json(err) }
      }      
};



