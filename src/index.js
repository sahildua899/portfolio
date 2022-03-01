const path = require('path')
const express = require('express');
const app = express();

const staticPath = path.join(__dirname, '../public/inbio');
console.log(path.join(__dirname, '../public/inbio'));

app.use(express.static(staticPath));

app.get("/", (req,res)=>{
    res.send("Welcome to Homepage")
})
app.get("/About", (req,res)=>{
    res.send("Welcome to About Us")
})

app.listen(9000, ()=>{
    console.log("Listening the port at 9000")
})