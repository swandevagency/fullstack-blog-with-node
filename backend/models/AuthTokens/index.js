const mongoose = require("mongoose");
const schema = mongoose.Schema

let authSchema = new mongoose.Schema({
    authToken:String,
  })


module.exports = authSchema