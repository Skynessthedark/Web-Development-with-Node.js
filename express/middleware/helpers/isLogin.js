const isLogin = (req, res, next)=>{
    let isLogin = true;
    if(isLogin)
        next();
    else
        res.send('Lütfen giriş yapın.');
}

module.exports = isLogin;