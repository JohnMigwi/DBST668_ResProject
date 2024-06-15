const express = require('express')
const path = require ('path')

const app = express()
const PORT = 5000;

app.use(express.static(path.resolve('../node-express-course/02-express-tutorial/navbar-app')))


app.get('*',(req, res)=>{
    res.status(404).send(`<h3>Error Resource not found</h3>`)
})

app.listen(5000, ()=>{
    console.log(`http://localhost:${PORT}`);
})