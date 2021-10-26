const mongoose = require("mongoose");
require('../../../../models/index')
// const schema = mongoose.Schema
// const auth = require('../../../../models/index').authmodel
// const blog = require('../../../../models/index').blogmodel
// const user = require('../../../../models/index').usermodel



const register = (req,res) =>{
    console.log('req recived')
    let usertaken = false
    mongoose.model('User').countDocuments({username : req.body.username},function(err,count,){
      console.log(count)
      if(count > 0){
        usertaken = true
        return
      }
    })
    mongoose.model('User').countDocuments({email : req.body.email},function(err,ecount){
      console.log(ecount)
      if(usertaken){
        console.log(usertaken)
        console.log('username taken')
        res.status(400).send('this username has been taken')
        
        return
      }
      if(ecount > 0){
        console.log('email taken')
        res.status(400).send('this email already exist')
        return
      }
      else{
        mongoose.model('User').create({
          username : req.body.username,
          password : req.body.password,
          email : req.body.email
        })
        .then(res =>{
          console.log('succesful')
         
        })
        res.end('succesfully registerd')
      }
    })
}

module.exports = register