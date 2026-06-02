// Cristian Emanuel Marcheti & Maria Luiza Bonato - 3 D.S.
// import express
const express = require('express');
const mysql = require('mysql2');
const app = express ();

// app.use(cors());

app.use(express.json());

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'etec_api'
});

conexao.connect((erro) => {

    if (erro) {

        console.log('Erro ao conectar');

        return;
    }

    console.log('MySQL conectado');
})

// cria rota GET
app.get("/", (req, res) => {
    // retorna JSON
    res.json({
        mensagem: 'API funcionando',
        curso: 'ETEC ADS'
    });
});

app.get('/usuarios', (req, res) => {

    const sql = 'SELECT * FROM usuarios';
    
    conexao.query(sql, (erro, resultado)=> {
        
        if(erro) {
            console.log(erro);

            return;
        }
        
        res.json(resultado);

    })

})

app.post('/usuarios', (req, res) => {

    const nome = req.body.nome;
    const idade = req.body.idade;
    const email = req.body.email;
    const cidade = req.body.cidade;

    const sql =`
        INSERT INTO usuarios
        (nome, idade, email, cidade)
        VALUES (?, ?, ?, ?)
    `;

    conexao.query(

        sql,

        [nome, idade, email, cidade],

        (erro, resultado) => {

            if(erro){
                console.log(erro);
                return;

                res.json({
                    mensagem: 'Usuário cadastrado com sucesso'
                });

            }
            
        }

    );

});

// inicia servidor
app.listen(3000, () => {    

    console.log("Servidor rodando");

})