const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'API Recipes',
            version: '1.0',
            description: 'APIs para aplicação de teste em NodeJS',
        },
    },
    apis: ['/usr/app/src/routes.js'],
};

const specs = swaggerJsdoc(options);

module.exports = function(app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
