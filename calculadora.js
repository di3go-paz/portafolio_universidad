let operacion = "";
let resultado = 0;

function agregar(valor){
    const entrada = document.querySelector("#entrada");
    operacion += valor;
    entrada.value = operacion;
}

const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", (event) => {
        event.preventDefault();
        const valor = boton.textContent;
        agregar(valor);
    });
});




