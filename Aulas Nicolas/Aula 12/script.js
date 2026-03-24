class conta{
    #senha
    #conta
    #agencia
    #saldo
    #titular

    constructor(senha,agencia,conta,titular,saldo){
        this.#agencia = agencia
        this.#conta = conta
        this.#saldo = saldo
        this.#titular = titular
        this.#senha = senha
    }
    
    get saldo(){
        return this.#saldo
    }

    set saldo(value){
        this.#saldo += value
    }

    depositar(conta, agencia, valor){
        valor > this.#saldo ? this.#saldo += valor: console.error('Valor é maior que o atual')
        if (conta == this.#conta && agencia == this.#agencia){
            return this.#saldo += valor
        }
        else{
            return console.error('Os dados da agência não coincidem. Operação cancelada.')
        }
    }
}

const conta1 = new conta('1234', '345', '2342232', 'Fernanda', 10000)

conta1.depositar('2342232', '345', 1000)

console.log(conta1.saldo)