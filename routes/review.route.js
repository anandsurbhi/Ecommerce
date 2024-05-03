const router=require('express').Router();
const ProductModel=require('../models/Product.model.js')
const ReviewModel=require('../models/Review.model.js')


router.post('/products/:productId/reviews',async(req,res)=>{
    const { productId } =req.params;
    const { rating,comment }=req.body;
   const reviews=await ReviewModel.create({rating,comment});

   const product=await ProductModel.findById(productId);
   console.log(reviews.comment);
   product.reviews.push(reviews._id);
   await product.save();
   res.redirect('back');
})

router.delete('/products/:productId/reviews/:reviewId',async(req,res)=>{
 
const {productId,reviewId}=req.params;
console.log(productId,reviewId);
const product=await ProductModel.findById(productId);
console.log(product);
const reviewIndex=product.reviews.findIndex(review=>review._id== reviewId);
console.log(reviewIndex);
product.reviews.splice(reviewIndex,1);
await product.save();

res.render('products/show',{ product });
})

    

module.exports=router;

