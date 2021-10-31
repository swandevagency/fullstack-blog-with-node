// requiring the router
const router1 = require('express').Router();

// requiring the controllers
const {
    register,
    login,
    blogPageMountingInfo,
    deleteBlog,
    editBlog,
    createBlog
} = require('../controllers/methods/index');

const {RequireLogin} = require('../middlewares/index');


router1.post('/register',register);


router1.post('/login', login);

router1.get('/blogs',RequireLogin, blogPageMountingInfo);

router1.delete('/blogs/:id', RequireLogin, deleteBlog);

router1.put('/blogs/:id', RequireLogin, editBlog);

router1.post('/blogs', RequireLogin, createBlog);

module.exports = {
    router1
}

// must require jwt for mounting post