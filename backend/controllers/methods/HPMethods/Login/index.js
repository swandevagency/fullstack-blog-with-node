const mongoose = require("mongoose");
require('../../../../models/index')
// const schema = mongoose.Schema
// const auth = require('../../../../models/index').authmodel
// const blog = require('../../../../models/index').blogmodel
// const user = require('../../../../models/index').usermodel



const login = (req, res) => {
  const inputedpassword = req.body.password
  mongoose.model('User').findOne({username :req.body.identifier},(err, result) =>{
    if(!result){
      res.status(400).end("this username doesn't exist")
    }
    else if(inputedpassword !== result.password){
      res.status(403).end('wrong password')
    }
    else if(inputedpassword === result.password){
      const jwt = require('crypto').randomBytes(64).toString('hex')
      const sata = {
        jwt,
        message:'welcome'
      }
      mongoose.model('Auth').create({
        authToken : `Bearer ${jwt}`
      })
      res.send(sata)
    }
  })
}

module.exports = login