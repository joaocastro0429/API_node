class ProdutosController{

  create(request,response){
    const {name,description}=request.body
    // Handle the POST request for /produtos
     return response.status(201).json(`NOME :${name} A DESCRIÇÃO: ${description}`)
     
  }
 
  }
module.exports=ProdutosController