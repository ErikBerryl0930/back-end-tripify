const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'API DOC',
        description: 'this is documentation of api'
    },
    host: 'localhost:3000'
};


const outputFile = './api-doc/swagger-output.json';
const routes = ['./app.js'];


swaggerAutogen(outputFile, routes, doc);