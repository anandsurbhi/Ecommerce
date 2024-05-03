const express = require('express');
const Product = require('../models/Product.model');
const router = express.Router();


router.get('/products', async (req, res) => {
    const products = await Product.find({});  //to pint all products 
    res.render('products/index', { products });
})


router.get('/products/new', (req, res) => {
    res.render('products/new');  //to create new product 
})



router.post('/products', async (req, res) => {
    const { title, price, description, image } = req.body;
    console.log(req.body);
    // return res.send('from product route')
    await Product.create({ title, price, description, image });
    res.redirect('/products');
})

router.get('/products/:id',async(req,res)=>{
const id=req.params.id;
const product=await Product.findById(id).populate('reviews');
console.log(product);
res.render('products/show',{ product });
})
   

router.get('/products/:id', async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.render('products/show', { product });
})

router.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });
})

router.put('/products/:id', async(req, res)=>{
    const {title, description, image, price} = req.body;
    const {id} = req.params;
    const existingProduct = await Product.findById(id);

    existingProduct.title = title;
    existingProduct.description = description;
    existingProduct.image = image;
    existingProduct.price = price;

    await existingProduct.save();
    res.redirect('/products');
})

router.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})


module.exports = router;