class veiculo{
    #id
    #marca
    #modelo
    #preco
    #disponivel

    constructor(id,marca,modelo,preco,disponivel){
        if ((marca==null || marca.lenght<2) || (modelo==null || modelo.lenght<2) || (preco<=0)){
            return console.error('Inválido!')
        }
        else{
            this.#disponivel=true
            this.#id=id
            this.#marca=marca
            this.#modelo=modelo
            this.#preco=preco
        }
    }

    getid(){
        return this.#id
    }

    getmarca(){
        return this.#marca
    }

    getmodelo(){
        return this.#modelo
    }

    getpreco(){
        return this.#preco
    }

    verifydisponivel(){
        return this.#disponivel === true ? true : false
    }

    mudarpreco(){
        return (this.#disponivel === true)
    }


}

const veiculo = new veiculo('1','jaguar','não sei','120000')

class carro extends veiculo{
    portas

    constructor(portas){
        if (portas < 0){
            return console.error('Inválido!')
        }
        else{
            this.portas=portas
        }
    }
}

class moto extends veiculo{
    cilindradas
}

const Carro = new carro(4)
const Moto = new moto('1000cc')