'use strict';

module.exports = server => {

    let io = require('socket.io')(server);

    io.on('connection', socket => {

        socket.on('chat message', data => {
            io.emit(data.slug, data.message);
        });

    });
}