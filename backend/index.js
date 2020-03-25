const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana omnistack11.0',
        aluno: 'Mario'
    })
})

app.listen(3333);