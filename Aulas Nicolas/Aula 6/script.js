    function adicionar(){
        let add = document.getElementById('lista')
        let li = document.createElement('li')
        let valor = document.getElementById('caixinha').value
        let botao = document.createElement('button')

        botao.textContent = "X"

        li.innerHTML = valor
        add.appendChild(li)
        li.appendChild(botao)

        botao.addEventListener("click", () => {
            botao.parentElement.remove()
        })
    }



