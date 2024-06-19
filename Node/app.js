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
app.get('/api/singleProduct/:id', (req,res) =>{
        const productID = parseInt(req.params.id)
        const singleProduct = products.find(product=> product.id === productID)
        res.json(singleProduct)
});


app.post('/api/product', (req, res) =>{
    const newProduct = {
        id: products.id +1,
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        desc: req.body.desc
    }
    products.push(newProduct);
    res.json(newProduct)
})





app.get('*',(req, res)=>{
    res.status(404).send(`<h3>Error Resource not found</h3>`)
})

app.listen(5000, ()=>{
    console.log(`http://localhost:${PORT}`);
})