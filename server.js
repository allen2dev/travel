'use strict';
const Hapi = require('hapi');
const Path = require('path');

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: '3000'
});
/*
* 服务端路由
* */
server.register(require('vision'), () => {
    server.views({
        engines: {
            hbs: require('handlebars')
        },
        relativeTo: __dirname,
        layout: true,
        path: 'views'
    })

    server.route({
        method: ['POST', 'GET'],
        path: '/',
        handler: function (request, reply) {
            reply.view('home')
        }
    })
});


server.start(() => console.log('Started at: ', server.info.uri));