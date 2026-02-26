// Pilha
// Push -> +
// Pop -> -

// Fila
// enquele -> +
// dequele -> -

const pessoas = []
const pessoa1 = {
    Nome: 'Arthur',
    Sobrenome: 'Vieira',
    Idade: '11'
}

const pessoa2 = {
    Nome: 'Felipe',
    Sobrenome: 'Lemos',
    Idade: '16'
}

const pessoa3 = {
    Nome: 'Fernanda',
    Sobrenome: 'Lemos',
    Idade: '21'
}

const pessoa4 = {
    Nome: 'Zazu',
    Sobrenome: 'Vieira',
    Idade: '1'
}

const pessoa5 = {
    Nome: 'Arnoldo',
    Sobrenome: 'Lemos',
    Idade: '50'
}

const pessoa6 = {
    Nome: 'Ana Paula',
    Sobrenome: 'Vieira',
    Idade: '48'
}

pessoas.push(pessoa1)
pessoas.push(pessoa2)
pessoas.push(pessoa3)
pessoas.push(pessoa4)
pessoas.push(pessoa5)
pessoas.push(pessoa6)

const pessoasfiltro = pessoas.filter((p) => p.Idade < 20) //p é o parametro
const encontrezazu = pessoas.find((p) => p.Nome == 'Zazu') 

console.log(pessoasfiltro) //posso escolher qual indice
console.log(encontrezazu)
console.log(pessoas.indexOf(encontrezazu)) //procura o indice

let container = document.getElementById('container')
function createcard (pessoas){
    let div = document.createElement('div')
    let span = document.createElement('span')
    span.innerHTML = `${pessoas.Nome} ${pessoas.Idade}` //usa ` e não aspas
    div.appendChild(span)

    return div
}

pessoas.forEach(pessoas => {
    const card = createcard(pessoas)
    container.appendChild(card)
})