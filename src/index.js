const { response, request } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

/**GET, POST, PATCH, DELETEyan */

/**Tipos de parâmetros:
 * 
 * Route Params=> são os parâmetros divididos pela barraa "/"
 * servem pra identificar, editar, buscar ou deletar um recurso[put]
 * 
 * Query Params=> Paginação, filtro de busca[get]
 * 
 * Body Params=> Objetos para incerção ou alteração de um recurso(sempre usado como JSON[feito no post]
 */
app.get("/courses", (request, response)=>{
    const query =request.query;
        console.log(query);
    return response.json([
        "Curso1",
        "Curso2",
        "Curso3"
    ]);
});

app.post("/courses", (request, response)=>{
    const body = request.body;
    console.log(body);
    return response.json([
        "Curso1",
        "Curso2",
        "Curso3",
        "Curso4"
    ]);

})

app.put("/courses/:id", (request, response)=>{
    const {id} = request.params;
    console.log(id);
    return response.json([
        "Curso6",
        "Curso2",
        "Curso3",
        "Curso4"
    ]);

   
})

app.patch("/courses/:id", (request, response)=>{
    return response.json([
        "Curso6",
        "Curso7",
        "Curso3",
        "Curso4"
    ]);
})


app.delete("/courses/:id", (request, response)=>{
    return response.json([
        "Curso6",
        "Curso7",
        "Curso4"
    ]);
})



//localhost:3333
app.listen(3333);