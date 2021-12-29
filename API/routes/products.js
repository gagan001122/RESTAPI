const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

router.get('/' , (req,res,next) => {
    res.status(200).json({
        message:'Handling GET requests to /products' 
    });
});


// router.post('/' , (req,res,next) => {
//     res.status(201).json({
//         message:'Handling POST requests to /products' 
//     });
// });
router.post('/' , (req,res,next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    const product = new Product({
        id: new mongoose.Types.ObjectID(),
        name: req.body.name,
        price: req.body.price
    });
    product.save().then(result =>{
        console.log(result);
    })
    .catch(err=>console.log(err));

    res.status(201).json({
        message:'Handling POST requests to /products' ,
        createdProduct: product
    });
});

router.get('/:productID',(req,res,next)=>{
    const id = req.params.productID;
    if(id== '1'){
        res.status(200).json({
            message: 'You have passed an correct ID',
            id: id 
        });
    }else{
        res.status(200).json({
            message:'You have passed an wrong ID'
        })
    }
});

router.patch('/:productID',(req,res,next)=>{
        res.status(200).json({
            message: 'Product Updated!',
        });
});

router.delete('/:productID',(req,res,next)=>{
    res.status(200).json({
        message: 'Product Deleted!',
    });
});




module.exports = router;