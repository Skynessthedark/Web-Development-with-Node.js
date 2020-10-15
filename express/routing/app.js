const express = require('express')
const app = express()

const signin = require('./routes/signin')
app.use('/', signin)

app.listen(3000)