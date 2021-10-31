const register = require('./HomePageMethods/Register/index')
const login = require('./HomePageMethods/Login/index')
const blogPageMountingInfo = require('./BlogsMethods/index').blogPageMountingInfo
const deleteBlog = require('./BlogsMethods/index').deleteBlog
const editBlog = require('./BlogsMethods/index').editBlog
const createBlog = require('./BlogsMethods/index').createBlog







module.exports = {
    register,
    login,
    blogPageMountingInfo,
    deleteBlog,
    editBlog,
    createBlog
}