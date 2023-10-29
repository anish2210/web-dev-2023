
const express = require('express');
const Product = require('../models/jwelleries.models');

const router = express.Router();


router.post("", async (req, res)=> {
    try {
        const product = await Product.create(req.body);
        res.status(201).send(product);
    } catch (error) {
        res.status(500).send({"message": error.message});
    }
});

router.get("", async (req, res)=>{
    try {
        const products = await Product.find().lean().exec();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({"message": error.message});
    }
})


module.exports = router;