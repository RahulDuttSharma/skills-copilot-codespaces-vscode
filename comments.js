// Create web server
// Create a route for comments
// Create a route for comments/:id
// Create a route for comments/:id/delete

// Create web server
const express = require('express');
const app = express();

// Create a route for comments
app.get('/comments', (req, res) => {
  res.send('Comments Page');
});

// Create a route for comments/:id
app.get('/comments/:id', (req, res) => {
  res.send('Comments ID Page');
});

// Create a route for comments/:id/delete
app.get('/comments/:id/delete', (req, res) => {
  res.send('Comments ID Delete Page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});