const express = require('express')
const path = require ('path')
const {products}= require ('../node-express-course/02-express-tutorial/data')


const app = express()
const PORT = 5000;

app.get('/api/AllProducts', (req, res)=>{
    const simplyproducts = products.map(product =>({
        id : product.id,
        name: product.name,
        image: product.image,
        description: product.desc
    }))  
    res.json(simplyproducts)
})

//get product by id
app.get('/api/singleProduct', (req,res) =>{
        const singleProducts
});





app.get('*',(req, res)=>{
    res.status(404).send(`<h3>Error Resource not found</h3>`)
})

app.listen(5000, ()=>{
    console.log(`http://localhost:${PORT}`);
})