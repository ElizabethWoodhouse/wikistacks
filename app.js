const express = require('express');
const morgan = require('morgan');
const path = require ('path');
const layout= require ('./views/layout');
const users = require ('./routes/users');
const wiki = require ( './routes/wiki');
const staticMiddleware=express.static(path.join(__dirname,'/public'));

const app = express ();
app.use(staticMiddleware);
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use("/wiki",wiki);
app.get("/",(req,res) =>{
    res.redirect('/wiki');
})






app.listen(3000); //can update port later

