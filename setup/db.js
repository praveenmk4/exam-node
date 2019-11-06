const mongoose = require('mongoose');
//const appConfig = require(`./../config/${process.env['NODE_ENV']}.config.js`);
//const dbURI = appConfig.dbURL
const dbURI = 'mongodb://127.0.0.1:27017/exam';



mongoose.connect(dbURI);
// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
    console.dir('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});