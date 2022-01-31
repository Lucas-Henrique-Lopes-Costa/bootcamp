const express = require('express');
const { uuid } = require('uuidv4'); // cria um id único

const app = express();

// passar todas as rotas por ela
app.use(express.json());

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
 *  Ex.: http://localhost:3333/projects/1
 * 
 * Request Body: Conteúdo (ex.: criar um usuário) na hora de criar ou editar um recurso
 *  Ex.: 
 */

const projects = []; // será o nosso banco de  dados

//        recurso  -> o que vai retornar
app.get('/projects', (request, response) => {
    const { title } = request.query; // desestruturando uma variável
    
    const results = title
        ? projects.filter(project => project.title.includes(title))
        : projects; 

    return response.json(results);
    // send
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;

    const project = { id: uuid(), title, owner };

    projects.push(project);
    
    return response.json(project);
});

// atualiza 1 projeto
//      http://localhost:3333/projects/1
app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    const { title, owner } = request.body;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0){
        return response.status(400).json({ error: 'Project not found.' })
    }

    const project = {
        id,
        title,
        owner,
    };

    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0){
        return response.status(400).json({ error: 'Project not found.' })
    }

    projects.splice(projectIndex, 1);

    return response.status(204).send(); // 204 -> No content
});

app.listen(3333, () => {
    console.log('🚀 Back-end started!')
});

// run with: yarn nodemon src/index.js
// or execute the script: yarn dev
