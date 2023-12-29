const express = require('express');
const path = require('path'); // Import the 'path' module
const port = process.env.PORT || 5000;
const app = express();

// Use the express.static middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
// API ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/trail', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/trailPost', (req, res) => {
    console.log(req.body);
    console.log('hello');
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
