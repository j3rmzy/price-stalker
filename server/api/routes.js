const express = require("express");
const Product = require('../db/models/product');
const router = express.Router();

router.get('/products', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

router.post('/products', async (req, res) => {
    const productWebsiteKey = /productWebsite(-[0-9])/;
    const productPriceKey = /productKey(-[0-9])/;

    console.log(req);

    /**
     * Loop through each key
     * If the key includes productWebsite, create an object and add a key of website and the value of productWebsite
     * If the key includes productPrice, 
     */

    
    // const scrapeWebsites = Object.keys(req.body).map(key => {
    //     if (productWebsiteKey.test(req.body[key])) {
    //         return 
    //     }
    // })
    // const productDetails = new Product({ 
    //     productName: req.body.productName,
    //     productImage: req.body.productImage,
    //     scrapeWebsites: [{
    //         website: "JD Sports",
    //         price: 110
    //     }, {
    //         website: "Adidas",
    //         price: 110
    //     }],
    //     dateCreated: Date.now(),
    //     lastDateScraped: null
    // });

    // console.log(productDetails);

    // await productDetails.save();
    // res.send(productDetails);

    //await when sending to backend - await *.send();
    // //res.send *report findings to front end res.send(.....)
})

module.exports = router;