const Hapi = require('@hapi/hapi');
const host = "localhost";
const port = 3002
const server = Hapi.server({
    port: port,
    host: host,
    routes: {
        cors: {
            origin: ['*'], // an array of origins or 'ignore'    
            headers: ['Accept', 'Authorization', 'Content-Type', 'If-None-Match'], // an array of strings - 'Access-Control-Allow-Headers'
            exposedHeaders: ['WWW-Authenticate', 'Server-Authorization'], // an array of exposed headers - 'Access-Control-Expose-Headers',
            additionalExposedHeaders: ['Accept'], // an array of additional exposed headers
            maxAge: 60,
            credentials: true // boolean - 'Access-Control-Allow-Credentials'
        }
    }
});

module.exports = server;