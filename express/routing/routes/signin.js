const express = require('express')
const router = express.Router()

router.get('/signin', (req, res)=>{
    res.send('Signin sayfası')
})

module.exports = router
