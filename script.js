const convertButton = document.querySelector(".principal__button");
const converterDe = document.querySelector("#converterDe");
const converterPara = document.querySelector("#converterPara");
const imagemConvertida = document.querySelector(".img__convertida");
const tituloConvertido = document.querySelector(".titulo__convertido");

let cotacoes = [];
getData();

async function getData() {
    const url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      cotacoes = await response.json();
    //   console.log(cotacoes)
      
    } catch (error) {
      console.error(error.message);
    }

  }



convertButton.addEventListener("click", async ()=>{
   
    const dolarToday  = cotacoes.USDBRL.bid;
    const euroToday = cotacoes.EURBRL.bid;

    console.log(euroToday);
    console.log(dolarToday);
    
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


});



converterPara.addEventListener("change", async ()=>{

    
    const valorDepois = document.querySelector(".valor-convertido");
    const inputValor = document.getElementById("valor").value;

    const dolarToday  = cotacoes.USDBRL.bid;
    const euroToday = cotacoes.EURBRL.bid;

    console.log(euroToday);
    console.log(dolarToday);

    if(converterPara.value == "dolar"){
        tituloConvertido.innerHTML = "Dólar Americano";
        imagemConvertida.src = "./assets/img/estados-unidos (1) 1.png";
        valorDepois.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValor / dolarToday);


        
    }
    if(converterPara.value == "euro"){
        tituloConvertido.innerHTML = "Euro";
        imagemConvertida.src = "./assets/img/euro.png";
        valorDepois.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputValor / euroToday);
        
    }
});
