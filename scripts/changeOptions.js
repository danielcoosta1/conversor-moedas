import converterValores from "./converterValores.js";


const imagemConvertida = document.querySelector(".img__convertida");
const tituloConvertido = document.querySelector(".titulo__convertido");


const  changeOptions = ()=>{
    
    if(converterPara.value == "dolar"){
        tituloConvertido.innerHTML = "Dólar Americano";
        imagemConvertida.src = "./assets/img/estados-unidos (1) 1.png";
        converterValores();
  
    }
    if(converterPara.value == "euro"){
        tituloConvertido.innerHTML = "Euro";
        imagemConvertida.src = "./assets/img/euro.png";
        converterValores();
    }
}


export default changeOptions