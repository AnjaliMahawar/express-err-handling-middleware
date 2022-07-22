//console.log("helloooo")
const express = require('express')
const app = express()
require('dotenv').config()
//error 
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send("somthing went wrong")

})
app.get('/', function (req, res) {
  res.send('Everything is oky...')
})

let port =process.env.PORT;
app.listen(port,()=>{
    console.log(`this server is running on ${port}`)
})