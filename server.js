'use strict';
const Hapi = require('hapi');
const Path = require('path');

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 3000)
});
/*
* 服务端传输文件
* */
server.register(require('inert'), () => {
    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            var path = Path.join(__dirname, 'public/index.html');
            reply.file(path);
        }
    });

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: Path.join(__dirname, 'public')
            }
        }
    })
});


server.start(() => console.log(`Started at: ${ server.info.uri }` ));