const express = require ('express')
const loggering = require('../Node/logger')

const app = express();

app.use('/api', loggering)

app.get('/', (req, res)=>{
   res.send("Home")
})

app.get('/product', (req, res) =>{
   res.send("Products");
})

app.listen(5000, ()=>console.log("logged AND STARTED"))