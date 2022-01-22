const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/price-stalker");
    // The schema (structure) of the data which will appear in my 'test' DB
    const productSchema = new mongoose.Schema({
        // The property within the 'test' DB 
        productName: String,
        productImage: String,
        scrapeWebsites: [{
            website: String,
            price: Number
        }],
        dateCreated: Date,
        lastDateScraped: Date,
    })

    // Convert the structure into the model (class) which new documents are based on. Inheriting the structure from this class.
    const Product = mongoose.model('Product', productSchema);

    const productDetails = new Product({ 
        productName: "Adidas NMD R1",
        productImage: "https://i8.amplience.net/i/jpl/jd_GZ7925_a?qlt=92&w=750&h=531&v=1&fmt=auto",
        scrapeWebsites: [{
            website: "JD Sports",
            price: 110
        }, {
            website: "Adidas",
            price: 110
        }],
        dateCreated: Date.now(),
        lastDateScraped: null
    });

    await productDetails.save();

    const products = Product.find();

    console.log(products);

};