const express = require('express');
const routes = require('./routes'); // Assuming routes are defined in a separate file


const app = express();
app.use(express.json())

// Mounting the routes middleware
app.use(routes);


// Start the server
const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
