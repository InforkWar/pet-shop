import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input"); //devuelve un arreglo

//for each itera cada uno de los valores del arreglo que recibe
inputs.forEach( input => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

