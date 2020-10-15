const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) =>{
    const user = false;

    if(user)
        res.send("user page")
    else
        return next({status:404, message: "User not found."});

});

module.exports = router;