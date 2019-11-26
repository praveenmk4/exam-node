const express = require('express');

const index = require('./index');
const admin = require('./admin');
const faculty = require('./faculty');
const student = require('./student');
const question =  require('./questionnaireRoute');
const setupRoutes = (app) => {
    app.use('/', index);
    app.use('/admin', admin);
    app.use('/faculty', faculty);
    app.use('/student', student);
    app.use('/question',question);
};

module.exports = { setupRoutes: setupRoutes };