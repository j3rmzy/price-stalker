const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    // The property within the 'test' DB 
    productName: String,
    productImage: String,
    scrapeWebsites: [{
        website: String,
        priceSelector: String,
        price: Number,
    }],
    dateCreated: Date,
    lastDateScraped: Date,
})

// Convert the structure into the model (class) which new documents are based on. Inheriting the structure from this class.
module.exports = mongoose.model('Product', productSchema);
