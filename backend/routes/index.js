const router1 = require('express').Router()
// const router2 = require('express').Router()
const methods = require('../controllers/methods/index')


router1.post('/register', (req ,res) =>{
  methods.register(req,res)
});


router1.post('/login',(req, res) =>{
    methods.login(req, res)
});

router1.get('/blogs', (req, res) =>{
  methods.bPIM(req, res)
});

router1.delete('/blogs', (req, res) =>{
  methods.deleteBlog(req, res)
});

router1.put('/blogs', (req, res) =>{
  methods.editBlog(req, res)
});

router1.post('/blogs', (req, res) =>{
  methods.createBlog(req, res)
});

///////////////////////////////////////////////////////////////////////////////////////////

// router2.route('/')

//   .get((req, res) =>{
//     methods.bPIM(req, res)
//   })

//   .delete((req, res) =>{
//     methods.deleteBlog(req, res)
//   })

//   .put((req, res) =>{
//     methods.editBlog(req, res)
//   })

// router2.post('/create', (req,res) =>{
//   methods.createBlog(req, res)
// })
  


module.exports = {
    router1
}
