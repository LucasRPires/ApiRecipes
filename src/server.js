require('dotenv').config();
const swagger = require('./libs/swaggerDoc');
const app = require('./app');

swagger(app);

app.listen(process.env.PORT, '0.0.0.0');
