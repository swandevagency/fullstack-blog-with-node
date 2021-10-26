const mongoose = require("mongoose");
//const schema = mongoose.Schema

// requiribg schemas

const userSchema = require('./User/index')
const thisisauthschema = require('./AuthTokens/index.js')
const blogSchema = require('./Blog/index');
const authSchema = require("./AuthTokens/index.js");


mongoose.model('User', userSchema);
mongoose.model('Blog', blogSchema);
mongoose.model('Auth', thisisauthschema)



// let usermodel = mongoose.model("user",userSchema) 
// let authmodel = mongoose.model("auth", thisisauthschema)
// let blogmodel = mongoose.model("blog",blogSchema)
// module.exports = {
//     authmodel,
//     blogmodel,
//     usermodel
// }

// here i guess we have to add mongoose and schema to the exported object as