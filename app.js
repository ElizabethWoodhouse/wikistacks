const express = require('express');
const morgan = require('morgan');
const path = require ('path');
const layout= require ('./views/layout');
const { db, Page, User } = require('./models');
const staticMiddleware=express.static(path.join(__dirname,'/public'));


const app = express ();
app.use(staticMiddleware);
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.get("/",(req,res) =>{
    res.send(layout('hello world'));
})

db.authenticate().then(() => {
    console.log('Connected to the database');
})

const init = async () => {
    await db.sync( {force: true} );

    app.listen(PORT = 3000, () => {
        console.log(`Server is listening on port ${PORT}!`);
      });
}

init();



// app.listen(3000); //can update port later


