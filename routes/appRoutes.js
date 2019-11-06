const express = require('express');

const index = require('./index');
const admin = require('./admin');
const faculty = require('./faculty');
const setupRoutes =(app) =>{
    app.use('/',index);
    app.use('/admin',admin);
    app.use('/faculty',faculty);
};

module.exports = {setupRoutes:setupRoutes};