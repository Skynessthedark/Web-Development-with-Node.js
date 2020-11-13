const server = require('http').createServer((req, res)=>{
    
});
const socketio = require('socket.io')(server);

socketio.sockets.on('connection', (socket)=>{
    console.log('Kullanici baglandi.');

    setTimeout(()=>{
        socket.emit('merhaba de');
    }, 2000);
    socket.on('selam ver', ()=>{
        console.log('selam');
    });

    socket.on('disconnect', ()=>{
        console.log("Kullanıcı ayrıldı.");
    });
});

server.listen(3000);