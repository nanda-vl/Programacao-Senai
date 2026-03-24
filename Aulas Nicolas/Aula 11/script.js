class automovel {
    modelo
    marca
    cor
    ano
    motor

    constructor(modelo, marca, cor, ano, motor){
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.ano = ano
        this.motor = motor
    }

    acelerar(){
        return `O veículo ${this.marca} ${this.modelo} esta acelerando`
    }
    frear(){
        return `O veículo ${this.marca} ${this.modelo} esta freando`
    }
    esterçar(lado){
        return `O veículo ${this.marca} ${this.modelo} esta virando para a ${lado}`
    }
}

const veiculo1 = new automovel('Fiesta','Ford','Preto', 2025, '1.5L')
console.log(veiculo1.acelerar())

const veiculo2 = new automovel('Astra','Chevrolet','Preto fosco',1999,'2.0L')
console.log(veiculo2.acelerar())

class pessoa{
    cabelo 
    olhos
    genero

    constructor(cabelo,olhos,genero){
        this.cabelo = cabelo
        this.olhos = olhos
        this.genero = genero
    }
    estilo(){
        return `O cabelo ${this.cabelo} é dificil de cuidar`
    }
    cor(){
        return `O ${this.olhos} é a cor mais bonita`
    }
    gene(){
        return `O gênero ${this.genero} é escroto`
    }
}

const pessoa1 = new pessoa('cacheado','verde','masculino')
console.log(pessoa1.estilo())

//HERANÇA

class carro extends automovel{
    abrirportas(){
        return 'Abrindo as portas!'
    }
}

class moto extends automovel{
    grau(){
        return 'Olha o grau!'
    }
}

const Carro = new carro('Kwid','Renault','Amarelo','2018','1.0L')
const Moto = new moto('HD','Harley','preto','1903','1000cc')

console.log(Moto.acelerar())