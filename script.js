const convertButton = document.querySelector(".principal__button");
const converterDe = document.querySelector("converterDe");
const converterPara = document.querySelector("converterPara");


function convertValues(){
    const dolarToday = 5.9;
    const euroToday = 6.8;
    const valorAntes = document.querySelector(".valor-para-converter");
    const valorDepois = document.querySelector(".valor-convertido");
    const inputValor = document.getElementById("valor").value;
    


    if(converterPara.value == "dolar"){
        valorDepois.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValor / dolarToday);
    }
   
    if(converterPara.value == "euro"){
   
        valorAntes.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputValor/euroToday);
    }
    

    valorAntes.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputValor);
    

   
}


convertButton.addEventListener("click", convertValues);




