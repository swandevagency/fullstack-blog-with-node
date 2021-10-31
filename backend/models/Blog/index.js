const mongoose = require('mongoose')

let blogSchema = new mongoose.Schema({
  Title: {
    type: 'string'
  },
  Description: {
    type: 'string'
  }
})

module.exports = blogSchema