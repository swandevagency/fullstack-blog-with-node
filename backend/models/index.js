const mongoose = require("mongoose");
//const schema = mongoose.Schema

// requiribg schemas

const userSchema = require('./User/index');
const blogSchema = require('./Blog/index');


mongoose.model('User', userSchema);
mongoose.model('Blog', blogSchema);
