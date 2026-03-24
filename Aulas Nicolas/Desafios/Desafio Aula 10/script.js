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

// Filtrar apenas usuários ativos
// Filtrar apenas usuários inativos
// Filtrar apenas desenvolvedores
// Filtrar apenas designers
// Filtrar apenas managers
// Filtrar apenas analistas de dados
// Filtrar usuários com salário maior que 5000
// Filtrar usuários com salário menor que 4000
// Filtrar usuários maiores de 30 anos
// Filtrar usuários menores de 25 anos
// Analistas de dados que estão ativos
// Devs com salário maior que 4000
// Managers com mais de 30 anos

let ativos = users.filter((p) => p.active ==' true')
let inativos = users.filter((p) => p.active == 'false')
let devs = users.filter((p) => p.role == 'dev')
let designers = users.filter((p) => p.role == 'designer')
let analistas = users.filter((p) => p.role == 'data_analyst')

let maior50Mil = users.filter((p) => p.salary > 50000)
let menor40Mil = users.filter((p) => p.salary < 40000)
let maior30Anos = users.filter((p) => p.age > 30)
let menor25Anos = users.filter((p) => p.salary < 25)

let analistasAtivos = users.filter((p) => p.role == 'data_analyst' & p.active == 'true')
let devs_maior4Mil = users.filter((p) => p.role == 'dev' & p.salary > 4000)
let managers_maior30Anos = users.filter((p) => p.role == 'manager' & p.age > 30)

