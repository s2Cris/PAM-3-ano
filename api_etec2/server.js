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
        },

    ];

    res.json(usuarios);
})

app.get('/idade', (req, res) => {
    const idade = [
        {
            id: 1,
            idade: 18
        },

        {
            id: 2, 
            idade: 20
        },

    ];

    res.json(idade);
})

app.get('/email', (req, res) => {
    const email = [
        {
            id: 1,
            email: 'tia@example.com'
        },

        {
            id: 2, 
            email: 'billie@example.com'
        },

    ];

    res.json(email);
})

app.get('/cidade', (req, res) => {
    const cidade = [
        {
            id: 1,
            cidade: 'São Paulo'
        },

        {
            id: 2, 
            nome: 'Billie'
        },

    ];

    res.json(cidade);
})

// inicia servidor
app.listen(3000, () => {    

    console.log("Servidor rodando");

})  