const mongoose = require("mongoose");
require('../../../models/index')
const jwt_key = 'this-is-my-secret-key-for-json-web-tokens-that-i-made'
const jwt = require('jsonwebtoken');



//////////////////////////////////////////////////////////////////////////////////////////////

const blogPageMountingInfo = (req,res) => {
  mongoose.model('Blog').find({},(err, result) =>{
      if(err){
        console.log(err)
        console.log(req)
      }
      else{
        const data = result
        res.send(data)
      }
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

const deleteBlog = (req, res) =>{
  console.log(req.headers.authorization.slice(6))
  let validtoken = jwt.verify(req.headers.authorization.split(' ')[1], jwt_key)
  console.log(validtoken)
  
  if(validtoken){
    console.log('validtoken is truthy')
    mongoose.model('Blog').findByIdAndDelete(req.headers.id,(err ,result) =>{
      if(err){
        console.log('shit happend')
      }
      else{
        res.send('it deleted')
      }
    })
  }
  else if(!validtoken){
    console.log('validtoken is an object cant say truthy')
  }


}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


const editBlog = (req, res) =>{
  const validtoken = jwt.verify(req.headers.authorization.split(' ')[1], jwt_key)
  if(validtoken){
    mongoose.model('Blog').findByIdAndUpdate(req.body.id, {Title : req.body.Title, Description : req.body.Description}, (err,result) =>{
      if(err){
        res.status(400).send('there is not such a blog')
      }
      else{
        res.send('changes applied')
      }
    })
  }else{
    res.status(403).send('you are not authenticated')
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////


const createBlog = (req, res) =>{
  const token = req.headers.authorization.split(' ')[1]
  jwt.verify(token , jwt_key,function(err, result){
    if(result){
      mongoose.model('Blog').create({
        Title : req.body.Title,
        Description : req.body.Description
      })
      res.send('added')
      return
    }
    else if(err.message){
      console.log(err.message)
      res.status(405).send('jwt expired')
      console.log('this shit have been sent')
    }
  })
}
//////////////////////////////////////////////////////////////////////////////////////////////


module.exports = {
    blogPageMountingInfo,
    deleteBlog,
    editBlog,
    createBlog,
}