const mongoose = require('mongoose')

let blogSchema = new mongoose.Schema({
    Title:String,
    Description:String
  })

  module.exports = blogSchema