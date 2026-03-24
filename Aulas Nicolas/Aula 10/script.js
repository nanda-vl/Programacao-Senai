let data = []

async function fetchData() {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
    data = await response.json()
}   

async function setdata(){
    await fetchData()

    const element = document.getElementById('data')
    const reducedata = data.reduce((acc,value)=>{
        if(value.municipio?.microrregiao?.mesorregiao?.UF?.sigla == "PR"){
            return acc + 1;
        }
        else{
            return acc;
        }
    },0)
    element.innerHTML = reducedata
    // console.log(reducedata)
}

setdata();

