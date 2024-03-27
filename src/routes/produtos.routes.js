const { Router, request } = require('express');

const router = Router();

const routerPrudotos=require('../controller/ProdutosController')

const RoutesProdutos=new routerPrudotos()

function myMiddleware(request,response,next){
    console.log("Estamos passando para uma middleware")
    next()
}

router.post("/produtos", myMiddleware, RoutesProdutos.create)



module.exports=router
