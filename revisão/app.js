// Cristian  Emanuel Marcheti - 3º D.S. - PAM II

/*let nome = 'Ana';
let idade = 17;

console.log(nome, idade);

if (idade >=18 ){
    console.log("Pode entrar");
} else {
    console.log("Não pode entrar");
} */

/*for (let i = 0; i < 5, i++;) {
    console.log(i);
}*/

/*function cumprimentar(nome){
    console.log("Olá," + nome)
}

cumprimentar("Ana");
cumprimentar("Carlos");

let alunos =['Ana', 'Carlos'];

alunos.push("Beatriz");

console.log(alunos)*/



//1. Criamos um array vazio para guardar os alunos
let alunos=[];

//2. Função para adicionar um aluno
function adicionarAluno(nome) {
    alunos.push(nome);
    console.log("Aluno adiciondo:", nome);
}



//3. Função para listar os alunos
function listarAlunos(){
    console.log("Lista de Alunos:");
    
    for (let i = 0; i < alunos.length; i++ ) {
        console.log (i + " - " + alunos[i]);
    }
}

//4. Usando as funções como botão

adicionarAluno('Maria')
adicionarAluno('João')
adicionarAluno('Cris')

listarAlunos()

// Atividade
// Inclua uma função que remova um aluno da lista e depois exiba a lista atualizada

function excluirAluno(nome){
    let exclusao = alunos.indexOf(nome);
    console.log("Aluno removido:", nome);
    if (exclusao > -1) {
        alunos.splice(exclusão, 1)
    }
}

excluirAluno('João')

listarAlunos()