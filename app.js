const express = require('express');
const cors = require('cors');

const app = express();
const port = 7686;

// Middleware
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
