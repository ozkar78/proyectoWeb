const express = require('express');

// app.js

// Import necessary modules
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Route for the homepage
app.get('/', (req, res) => {
    res.send('Welcome to my portfolio!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});