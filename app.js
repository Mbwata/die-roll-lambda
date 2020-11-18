require('dotenv').config();
express = require('express');
const sls = require('serverless-http') 
app = express();


app.get('/', (req, res) => res.send('Hello DevOps Bootcamp!'));
app.use('/roll', require('./controllers/roll_controller'));

module.exports.server = sls(app)
