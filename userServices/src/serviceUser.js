const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());


const port = 3000;
const urlDB = "mongodb://127.0.0.1:27017/UserService";

app.use('/api', userRoutes);

// Connect to MongoDB and start the server
mongoose.connect(urlDB)
    .then(() => {
        console.log('MongoDB connected...');
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch(err => console.error('MongoDB connection error:', err));
