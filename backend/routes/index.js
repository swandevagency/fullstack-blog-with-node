const router1 = require('express').Router()
const methods = require('../controllers/methods/index')


router1.post('/register',methods.register);


router1.post('/login',methods.login);

router1.get('/blogs', methods.blogPageMountingInfo);

router1.delete('/blogs',methods.deleteBlog);

router1.put('/blogs',methods.editBlog);

router1.post('/blogs',methods.createBlog);

module.exports = {
    router1
}
