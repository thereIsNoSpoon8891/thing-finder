const express = require('express')
const app = express()

app.use(express.json())

// ROUTE

app.use("/things", require('./routes/thingRoutes'))


// Handle errors

app.use((error, req, res, next)=>{
    console.log(error)
    res.send({errorMessage: error.message})
})

app.listen(8900, ()=>{
console.log("server running on port 8900")
})