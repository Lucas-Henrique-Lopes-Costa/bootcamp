const { response } = require('express');
const express = require('express');

const app = express();

/**
 * Método HTTP:
 * 
 * GET: buscar informações do back-end (no caso de deletar algo, não precisa de buscar nada)

 -> Precisam de uma ferramenta externa para ser interpretada
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end | PATH: atualiza informação mais específica
 * DELETE: deletar uma informação
 */

/**
 * Tipos de parâmetros: formas de enviar uma requisição
 * 
 * Query params: Filtros e paginação
 *  Ex.: http://localhost:3333/projects?title=React&ower=Lucas
 * 
 * Route params: Identificar recursos na hora de atualizar/deletar
 *  Ex.: 
 * 
 * Request Body:
 *  Ex.: 
 */


//        recurso  -> o que vai retornar
app.get('/projects', (request, response) => {
    const { tile, owner } = request.query;

    console.log(query);
    
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
    // send
});

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 3',
        'Projeto 4',
        'Projeto 5',
    ]);
});

//    atualiza 1 projeto
//      http://localhost:3333/projects/1
app.put('/projects/:id', (request, response) => {
    const { id } = request.params;

    console.log(params);

    return response.json([
        'Projeto 6',
        'Projeto 7',
        'Projeto 8',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 7',
        'Projeto 8',
    ]);
});

app.listen(3333, () => {
    console.log('🚀 Back-end started!')
});

// run with: yarn nodemon src/index.js
// or execute the script: yarn dev
