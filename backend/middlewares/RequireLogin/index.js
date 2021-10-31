const jwt_key = 'this-is-my-secret-key-for-json-web-tokens-that-i-made'
const jwt = require('jsonwebtoken');



module.exports = (req, res, next) => {
    const validtoken = jwt.verify(req.headers.authorization.split(' ')[1], jwt_key)
    if(!validtoken){
        res.status(403).send('u are not authenticated')
        return
    }
    next();
}