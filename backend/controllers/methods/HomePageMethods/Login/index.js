const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const jwt_key = 'this-is-my-secret-key-for-json-web-tokens-that-i-made'
const bcrypt = require('bcrypt')

/////////////////////////////////////////////////////////////////////////////////

const login = async (req, res) =>{
  const body = req.body
  const user = await mongoose.model('User').findOne({username : body.identifier})
  if(user){
    const validPassword = await bcrypt.compare(body.password , user.password)
    if(validPassword){
      const token = await jwt.sign({username:req.body.identifier}, jwt_key,{})
      const response = {
        token,
        message : 'welcome'
      }
      res.send(response)
      //.then(() =>{res.redirect('http://localhost:3000/blogs')})
    }
    else{
      res.status(400).send('invalid cridentials')
    }
  }
  else{
    res.status(400).send('invalid cridentials')
  }
}


module.exports = login