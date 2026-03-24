const users = [
{ id: 1, name: 'Ana', age: 22, salary: 3500, active: true, role: 'dev' },
{ id: 2, name: 'Carlos', age: 29, salary: 7200, active: false, role: 'manager' },
{ id: 3, name: 'Marina', age: 31, salary: 6800, active: true, role: 'designer' },
{ id: 4, name: 'João', age: 19, salary: 2500, active: true, role: 'dev' },
{ id: 5, name: 'Fernanda', age: 27, salary: 4100, active: false, role: 'designer' },
{ id: 6, name: 'Lucas', age: 35, salary: 9500, active: true, role: 'manager' },
{ id: 7, name: 'Beatriz', age: 24, salary: 3900, active: true, role: 'dev' },
{ id: 8, name: 'Rafael', age: 33, salary: 7800, active: true, role: 'data_analyst' },
{ id: 9, name: 'Juliana', age: 26, salary: 5200, active: true, role: 'data_analyst' },
{ id: 10, name: 'Bruno', age: 41, salary: 11000, active: false, role: 'manager' },
{ id: 11, name: 'Camila', age: 30, salary: 6300, active: true, role: 'designer' },
{ id: 12, name: 'Thiago', age: 28, salary: 4700, active: true, role: 'dev' },
{ id: 13, name: 'Patricia', age: 37, salary: 8800, active: true, role: 'data_analyst' },
{ id: 14, name: 'Gustavo', age: 23, salary: 3100, active: false, role: 'dev' },
{ id: 15, name: 'Larissa', age: 34, salary: 7600, active: true, role: 'manager' }
]

const cargo = users.map((user) => {
    return {name: user.name, role: user.role}
})

console.log(cargo)

const nome = users.map((nm) => {
    return {name: nm.name}
})

console.log(nome)

const maiuscula = users.map((nm) => {
    return {name: nm.name.toUpperCase()}
})

console.log(maiuscula)


const salaryanual = users.map((acc) => {
    return {Salary: acc.salary * 12}
}) 

console.log(salaryanual)

const nome_age = users.map((na) => {
    return {Name: na.name, Age: na.age}
})

console.log(nome_age)

const nome_salary = users.map((na) => {
    return {Name: na.name, Salary: `R$ ${na.salary}`}
})

console.log(nome_salary)

const classificacao = users.map((classi) => {
    if (classi.salary < 5000){
        return {nome: classi.name, level: 'Junior'}
    }
    else if (classi.salary >= 5000 && classi.salary < 10000){
        return {nome: classi.name, level: 'Pleno'}
    }
    else{
        return {nome: classi.name, level: 'Senior'}
    }
})

console.log(classificacao)

const nivel = users.map((n) => {
    if (n.salary < 5000){
        return {nome: n.name, level: 'Baixo'}
    }
    else if (n.salary >= 5000 && n.salary < 10000){
        return {nome: n.name, level: 'Médio'}
    }
    else{
        return {nome: n.name, level: 'Alto'}
    }
})

console.log(nivel)

const filt = users.map((f) => {
    return {name: f.name, id: f.id, cargo: f.active}
})

console.log(filt)




const soma = users.reduce((acc, users) => {
    return acc + users.salary
}, 0)

console.log(soma)

const media = users.reduce((acc, user) =>{
    return acc + user.salary / users.length
},0)

console.log(media.toFixed(0))
