let express= require('express');
const app= express.Router();
const {login}=require('../apis/login')
app.get('/login', login);
module.exports = app;