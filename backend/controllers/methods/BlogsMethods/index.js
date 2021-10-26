const mongoose = require("mongoose");
const models = require('../../../models/index')
// const schema = mongoose.Schema
// const auth = require('../../../models/index').authmodel
// const blog = require('../../../models/index').blogmodel
// const user = require('../../../models/index').usermodel


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
    mongoose.model('Auth').countDocuments({authToken :`${req.headers.authorization}`},(err, result) =>{
        console.log(req.headers.authorization)
        if(!result){
            res.status(403).send('you are not authenticated')
            return
        }
        if(result){
            console.log('delete request recived')  
            console.log(req.headers.id)
            mongoose.model('Blog').findByIdAndDelete(req.headers.id,(err,result) =>{
            if(err){
                console.log(err)
            }
            else{
                res.send('everything is fine')
            }
            })
        }
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


const editBlog = (req, res) =>{
    mongoose.model('Auth').countDocuments({authToken :`${req.headers.authorization}`},(err, result) =>{
        if(!result){
          res.status(403).send('you are not authenticated')
          return
        }
        if(result){
          console.log('put request recived') 
          console.log(req.body)
          mongoose.model('Blog').findByIdAndUpdate(req.body.id,{Title : req.body.Title, Description : req.body.Description},(err, result) =>{
            if(err){
              console.log(err)
            }
            else{
              res.send('changes applied')
            }
          })
        }  
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////

const createBlog = (req, res) =>{
    mongoose.model('Auth').countDocuments({authToken :`${req.headers.authorization}`},(err, result) =>{
        if(!result){
            res.status(403).send('you are not authenticated')
            return
        }
        if(result){
            mongoose.model('Blog').create({
            Title : req.body.Title,
            Description : req.body.Description
            })
        }
        res.send('added succesfully')
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////


module.exports = {
    blogPageMountingInfo,
    deleteBlog,
    editBlog,
    createBlog,
}