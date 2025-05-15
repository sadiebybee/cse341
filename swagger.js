const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        title: 'My API',
        description: 'Contacts API',
    },
    host: 'cse341-15li.onrender.com',
    schemes: ['https'],
};
const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];
swaggerAutogen(outputFile, endpointsFiles, doc);