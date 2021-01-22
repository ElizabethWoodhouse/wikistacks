const express = require('express');
const router = express.Router();
const add = require ('../views/addPage');

router.get("/add",(req, res)=>{
    res.send(add());
})

router.get("/",(req, res)=>{
    res.send('hello')
})

router.post("/",(req, res)=>{
    res.json(req.body);
})

module.exports=router;