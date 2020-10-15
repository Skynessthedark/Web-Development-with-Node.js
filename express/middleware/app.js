const express = require('express')
const app = express()

const profile = require('./routes/profile')
const user = require('./routes/user')
const isLogin = require('./helpers/isLogin')

app.set('view engine', 'pug');

//middleware
//eğer 1. parametreyi vermezsek tüm routelar için çalışır.
//app.use('profile', isLogin)

app.use('/', profile);
app.use('/', user);

app.use((err, req, res, next) =>{
    res.status(err.status);
    res.render('error', {
        message: err.message,
        status: err.status
    });
});

app.listen(3000);