const users = []

class User{
    #id
    #name
    #email
    #password
    #active

    constructor(id,name,email,password){
            if ((name==null || name=='') || (!email.includes('@')) || (password.length < 6)){
                return console.error('Inválido!')
            }
            else{
                this.#active=true
                this.#email=email
                this.#id=id
                this.#name=name
                this.#password=password
                users.push({id,name,email,password,active: true})
            }
    }

    getId(){
        return this.#id
    }

    getName(){
        return this.#name
    }

    setName(name){
        return !name ? console.error('Erro ao setar nome') : this.#name=name
    }

    getEmail(){
        return this.#email
    }

    setEmail(email){
        return !email.includes('@') ? console.error('Erro ao setar email') : this.#email=email
    }

    setPassword(password){
        return password.length < 6 ? console.error('Erro ao setar senha') : this.#password=this.#password
    }

    verifyPassword(password){
        return password !== this.#password ? false : true
    }

    changeUserAct(){
        return this.#active === true ? this.#active = false : this.#active = true
    }

    verifyUserAct(){
        return this.#active === true ? true : false
    }
}

class Client extends User{
    constructor(id,name,email,password){
        super(id,name,email,password)
    }

    showData(){
        return {
            id: this.getId(),
            name: this.getName(),
            email: this.getEmail(),
            active: this.verifyUserAct()
        }
    }

    changeData(name,email,password,){
        this.setName(name)
        this.setEmail(email)
        if (this.verifyPassword == true){
            return console.error('Não é possivel alterar a senha pela mesma')
        }
        else{
            this.setName(name)
            this.setEmail(email)
            this.setPassword(password)
        }
    }
}

class Admin extends User{
    constructor(id,name,email,password){
        super(id,name,email,password)
    }

    showAllUsers(){
        return users 
    }

}
const c1 = new Client(1,'Fer','fer@eu','123456')
console.log(c1.showData())

const a1 = new Admin(1,'Admin','admin@admin','123456')
console.log(a1.showAllUsers())

