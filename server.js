const express = require('express');
const app = express();
const path = require('path');
const mime = require('mime');

// Serve the static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist/ang-portfolio')));

// Route all other requests to the Angular app
app.get('*', (req, res) => {
  const filePath = path.join(__dirname, 'dist', req.url);
  const contentType = mime.getType(filePath) || 'text/html';
  res.setHeader('Content-Type', contentType);
  res.sendFile(filePath);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});