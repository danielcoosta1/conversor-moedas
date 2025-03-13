// let cotacoes = [];
// getData();

// async function getData() {
//     const url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       cotacoes = await response.json();
//     //   console.log(cotacoes)
      
//     } catch (error) {
//       console.error(error.message);
//     }

//   }

const converterValores = async ()=>{

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json()).catch((error)=>{
      console.error(error)
    });

    const dolarToday  = data.USDBRL.bid;
    const euroToday = data.EURBRL.bid;

    // console.log(euroToday);
    // console.log(dolarToday);
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

export default converterValores