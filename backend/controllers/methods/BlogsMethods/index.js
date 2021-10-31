const mongoose = require("mongoose");
require('../../../models/index')



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

const deleteBlog = async (req, res) =>{
  const _id = req.params.id;
  const blog = await mongoose.model('Blog').findOne({_id});
  if(!blog){
    return res.status(404).send({
      message: "this blog does not exist !"
    });
  }
  try {
    await mongoose.model('Blog').deleteOne({_id});
    res.status(200).send({
      message: "blog post deleted"
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Something went wrong !"
    })
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


const editBlog = async (req, res) =>{
  const _id = req.params.id
  const blog = await mongoose.model('Blog').findOne({_id})
  if(!blog){
    res.status(404).send({
      message:'this blog does not exist'
    })
    return
  }
  try {
    await mongoose.model('Blog').findByIdAndUpdate(_id, {Title : req.body.Title, Description : req.body.Description})
    res.send({
      message: 'succesfully added'
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: 'some thing went wrong'
    })
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////


const createBlog = (req, res) =>{
  mongoose.model('Blog').create({
    Title : req.body.Title,
    Description : req.body.Description
  })
  res.send('added')
}
//////////////////////////////////////////////////////////////////////////////////////////////


module.exports = {
    blogPageMountingInfo,
    deleteBlog,
    editBlog,
    createBlog,
}