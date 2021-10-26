// varibles

const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const mongoose = require("mongoose");
const router1 = require('./routes').router1
// const router2 = require('./routes').router2

// connecting to database
mongoose.connect("mongodb://localhost:27017/node-backend", { useNewUrlParser: true })
.then(() => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

// middlewares essentials

app.use(cors());

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());

app.use('/',router1)
// app.use('/blogs',router2)

// running server

app.listen(port, () =>{
  console.log("server is running")
})
