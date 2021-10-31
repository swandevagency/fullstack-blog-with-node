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
