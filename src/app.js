const express = require('express');
/**
 * AppController to register rules and middlewares
 */
class AppController {
    /**
     * contructor() method
     */
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    /**
     * void method register
     */
    middlewares() {
        this.express.use(express.json());
    }

    /**
     * method register
     */
    routes() {
        this.express.use(require('./routes'));
    }
}

module.exports = new AppController().express;
