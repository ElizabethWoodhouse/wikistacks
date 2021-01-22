const express = require('express');
const morgan = require('morgan');
const path = require ('path');
const staticMiddleware=express.static(path.join(__dirname,'/public'));

const app = express ();
app.use(staticMiddleware);
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.get("/",(req,res) =>{
    res.send('hello world');
})





app.listen(3000); //can update port later


