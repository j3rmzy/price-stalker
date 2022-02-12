const express = require("express");
const Product = require('../db/models/product');
const router = express.Router();

router.get('/products', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

router.post('/products', async (req, res) => {
    const productDetails = new Product({ 
        productName: req.body.productName,
        productImage: req.body.productImage,
        scrapeWebsites: [...req.body.scrapeWebsites],
        dateCreated: Date.now(),
        lastDateScraped: null
    });

    await productDetails.save();
    res.send(productDetails);

    //await when sending to backend - await *.send();
    // //res.send *report findings to front end res.send(.....)
})

module.exports = router;