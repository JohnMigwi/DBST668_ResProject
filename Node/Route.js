const express = require('express')
const path = require ('path')
const {products}= require ('../node-express-course/02-express-tutorial/data')


const app = express()
const PORT = 5000;

app.use(express.json());

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
        console.log(req.body);
});


app.post('/api/product', (req, res) =>{
    const newProduct = {
        id:  products.length + 1,
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        desc: req.body.desc
    }
    products.push(newProduct);
    res.json(newProduct)
})

app.put('/api/product/:id', (req, res) =>{
 const productID = parseInt(req.body.id)
 const singleProduct = products.find(products =>{products.id === productID}) 

    products.name = req.body.name || product.name,
    products.image = req.body.image || product.image,
    products.price = req.body.price || product.price,
    products.desc = req.body.desc || product.desc

    res.json(singleProduct)

});





app.get('*',(req, res)=>{
    res.status(404).send(`<h3>Error Resource not found</h3>`)
})

app.listen(5000, ()=>{
    console.log(`http://localhost:${PORT}`);
})



