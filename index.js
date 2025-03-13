import converterValores from "./scripts/converterValores.js";
import changeOptions from "./scripts/changeOptions.js";



const converterPara = document.querySelector("#converterPara");
const convertButton = document.querySelector(".principal__button");




convertButton.addEventListener("click", converterValores);
converterPara.addEventListener("change", changeOptions);
