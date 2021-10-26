const mongoose = require('mongoose')

const  userSchema = new mongoose.Schema({
    username:{
      type : String,
    },
    password:'String',
    email:{
      type : String,
    }
  })

  module.exports = userSchema