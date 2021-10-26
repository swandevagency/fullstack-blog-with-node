const register = require('./HPMethods/Register/index')
const login = require('./HPMethods/Login/index')
const bPIM = require('./BlogsMethods/index').blogPageMountingInfo
const deleteBlog = require('./BlogsMethods/index').deleteBlog
const editBlog = require('./BlogsMethods/index').editBlog
const createBlog = require('./BlogsMethods/index').createBlog







module.exports = {
    register,
    login,
    bPIM,
    deleteBlog,
    editBlog,
    createBlog
}