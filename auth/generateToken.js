const jwt = require("jsonwebtoken");

const generateToken = (email) => {
    return jwt.sign({email}, "abcd", {expiresIn: '30d'});
}

module.exports= generateToken;