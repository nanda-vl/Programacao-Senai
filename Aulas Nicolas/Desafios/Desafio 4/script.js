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