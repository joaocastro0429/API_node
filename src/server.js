 const express = require('express')
 const dotenv =require('dotenv')

 dotenv.config()

 const app=express()

 app.get("/api",(request,response)=>{
    return response.json({message:"cadastro de produtos"})
 })

 app.get("/api/:id/:user",(request,response)=>{
    const {id,user}=request.params
    return response.json(`ID : ${id} O nome do produto é ${user}`)
 })

 app.get("/produtos",(request,response)=>{
    const {page,limit}=request.query
    return response.send(`A minha página: ${page} Mostrar ${limit}`) 
 })




 app.listen(3333)