// Import required modules
const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // Import the routes folder

const app = express();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/api', routes); // Mount the routes on '/api'

// Root route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running successfully!' });
});

// Catch-all route for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
