const express = require('express');

const index = require('./index');
const admin = require('./admin');
const faculty = require('./faculty');
const student = require('./student');
const question =  require('./questionnaireRoute');
const autheticate =  require('./authorize');
const setupRoutes = (app) => {
    app.use('/', index);
    app.use('/admin', admin);
    app.use('/faculty', faculty);
    app.use('/student', student);
    app.use('/question',question);
    app.use('/auth',autheticate);
};

module.exports = { setupRoutes: setupRoutes };