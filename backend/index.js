// varibles

const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const mongoose = require("mongoose");
const router = require('./routes/index').router1;


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

app.use('/',router)

// running server

app.listen(port, () =>{
  console.log("server is running")
})


// docs , middlewares in it require login middleware , names , blog methods funcs