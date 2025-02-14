const convertButton = document.querySelector(".principal__button");
const converterDe = document.querySelector("#converterDe");
const converterPara = document.querySelector("#converterPara");
const imagemConvertida = document.querySelector(".img__convertida");
const tituloConvertido = document.querySelector(".titulo__convertido");

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
   
        valorDepois.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputValor / euroToday);
    }
    

    valorAntes.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputValor);
    

}


function changeOptions(){
    
    if(converterPara.value == "dolar"){
        tituloConvertido.innerHTML = "Dólar Americano";
        imagemConvertida.src = "./assets/img/estados-unidos (1) 1.png";
        convertValues();
    }
    if(converterPara.value == "euro"){
        tituloConvertido.innerHTML = "Euro";
        imagemConvertida.src = "./assets/img/euro.png"
        convertValues();
    }

}

converterPara.addEventListener("change", changeOptions);
convertButton.addEventListener("click", convertValues);




