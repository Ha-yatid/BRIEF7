const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());


const port = 5000;
const urlDB = "mongodb://127.0.0.1:27017/ProductService";

app.use('/api', productRoutes);

// Connect to MongoDB and start the server
mongoose.connect(urlDB)
    .then(() => {
        console.log('MongoDB connected...');
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch(err => console.error('MongoDB connection error:', err));
