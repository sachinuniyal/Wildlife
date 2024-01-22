const express = require('express');
const app = express();
const PORT = 3000;

// Mock wildlife data
const wildlifeData = require('./mockData/wildlife.json');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// API endpoint to get wildlife data
app.get('/api/wildlife', (req, res) => {
    res.json(wildlifeData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
