const mongoose = require("mongoose");
require('../../../../models/index')
const bcrypt = require('bcrypt');

/////////////////////////////////////////////////////////////////////////////////

const register = async (req, res) =>{
    const body = req.body
    const takenusername = await mongoose.model('User').findOne({username : body.username})
    const takenemail = await mongoose.model('User').findOne({email : body.email})
    if(takenusername){
        res.status(400).send('this username has been taken')
        return
    }
    if(takenemail){
        res.status(400).send('this email has been taken')
        return
    }
    const user = new mongoose.model('User')(body)
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
    user.save().then((doc) => res.status(200).send(doc))
    
}

module.exports = register