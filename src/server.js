require("express-async-errors")
const database=require('./database/sqlite')


const express = require('express');
const routes = require('./routes'); // Assuming routes are defined in a separate file
const AppError = require("./utils/AppError");


const app = express();
app.use(express.json())

// Mounting the routes middleware
app.use(routes);
database();

app.use((error,request,response,next)=>{
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status:"error",
      message:error.message 
    })
  
  }
  return response.status(500).json({
    status:"error",
    message:"Intenal server error"

  })
})


// Start the server
const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
