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

app.get('/produtos', (req, res) => {
    const produtos = [
        {
            id: 1,
            nome: 'Leite'
        },

        {
            id: 2, 
            nome: 'Pão'
        }
    ];

    res.json(produtos);
})

app.get('/filmes', (req, res) => {
    const filmes = [
        {
            id: 1,
            nome: 'Backrooms'
        },

        {
            id: 2, 
            nome: 'Hit Me Hard and Soft Tour'
        }
    ];

    res.json(filmes);
})

app.get('/celulares', (req, res) => {
    const celulares = [
        {
            id: 1,
            nome: 'Xiomi 15T Pro'
        },

        {
            id: 2, 
            nome: 'Galaxy S24 Ultra'
        }
    ];

    res.json(celulares);
})

app.get('/jogos', (req, res) => {
    const jogos = [
        {
            id: 1,
            nome: 'Life is Strange'
        },

        {
            id: 2, 
            nome: 'Mobile Legends: Bang Bang'
        }
    ];

    res.json(jogos);
})

// inicia servidor
app.listen(3000, () => {    

    console.log("Servidor rodando");

})  