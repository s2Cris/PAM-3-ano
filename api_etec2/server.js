// Cristian Emanuel Marcheti & Maria Luiza Bonato - 3 D.S.
// import express
const express = require('express');
const app = express ()

// cria rota GET
app.get("/", (req, res) => {
    // retorna JSON
    res.json({
        mensagem: 'API funcionando',
        curso: 'ETEC ADS'
    });
});

app.get('/usuarios', (req, res) => {
    const usuarios = [
        {
            id: 1,
            nome: 'Tia'
        },

        {
            id: 2, 
            nome: 'Billie'
        }
    ];

    res.json(usuarios);
})

// inicia servidor
app.listen(3000, () => {    

    console.log("Servidor rodando");

})  