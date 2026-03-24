// Reduce -> Reduz o vetor para um único valor

const arr = [1,2,3,4,5]

const soma = arr.reduce((acc, value) => {
    return acc + value

}, 0)

console.log(soma)


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

const ageavg = pessoas.reduce((acc, pessoa) => {
    return acc + pessoa.Idade / pessoas.length
}, 0)

console.log(ageavg.toFixed(0))

const arr2 = [1,2,3,4,5]

const mappe = arr2.map((arr) => {
    return arr * 2
})

console.log(mappe)

console.log(pessoas)

const peaple = pessoas.map((pessoa) => {
    return {Nome: pessoa.Nome, Sobrenome: pessoa.Sobrenome} //posso filtrar um ou mais 
})

console.log(peaple)