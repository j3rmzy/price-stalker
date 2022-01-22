const scrapersMockData = require('../../mocks/scrapers.json');
const scraperMockData = require('../../mocks/scraper.json');
const express = require('express');
const app = express();

const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/price-stalker")
    .then(() => {
        const app = express();
        const port = 5000;
    
        app.use(express.json());

        app.listen(port, () => {
            console.log(`Price Stalker API listening on port: ${port}`)
        })
    })


/**
 * GET - /scrapers/
 * GET - /scapers/:id
 * POST - /scrapers/
 * DELETE - /scrapers/:id
 */

// \    res.send({
//         data: scrapersMockData
//     })
// });

// app.get('/scrapers/:id', (req, res) => {
//     res.send({
//         data: scraperMockData
//     })
// })

// app.post('/scrapers', (req, res) => {
//     res.send('POST scraper to DB')
// })

// app.delete('/scrapers/:id', (req, res) => {
//     res.send('DELETE scraper')
// })

// app.listen(port, () => {
//     console.log(`Price Stalker API listening on port: ${port}`)
// });