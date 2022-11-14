const express = require('express')
const mongoose = require('mongoose')
const app = express()
const InsertionRoutes = require('./routes/InsertionRoutes')
require('dotenv').config()
app.use(express.json())
app.use("/insert",InsertionRoutes)
app.get('/',(req,res)=>{
    res.send('working fine here!')
}
)

mongoose.connect(process.env.MONGO_URI,()=>{
    app.listen(5000,()=>{
        console.log("running on 5000")
    })

})
