const { Router } = require('express');
const routerPrudotos = require('./produtos.routes');

const routerIndex = Router();

routerIndex.use('/api', routerPrudotos);

module.exports = routerIndex;
