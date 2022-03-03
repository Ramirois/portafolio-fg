const empresaPrev = document.querySelector('.empresa-anterior');
const empresaNext = document.querySelector('.empresa-siguiente');

const listaEmpresa =  document.querySelector('.lista-empresa');

const iglesiaPrev = document.querySelector('.iglesia-anterior');
const iglesiaNext = document.querySelector('.iglesia-siguiente');

const listaIglesia =  document.querySelector('.lista-iglesia');

let operacion = 0
let operacion2 = 0

empresaPrev.addEventListener('click', ()=>{
    operacion = 0
        listaEmpresa.style.transform =`translateX(${ operacion }%)`
})

empresaNext.addEventListener('click', ()=>{
    operacion = operacion - 50;
    if(operacion < -50){
        operacion = 0;
        // operacion = -99.99;
        listaEmpresa.style.transform =`translateX(${ operacion }%)`
    }else{
        listaEmpresa.style.transform =`translateX(${ operacion }%)`
    }
})

iglesiaPrev.addEventListener('click', ()=>{
    operacion2 = 0
    listaIglesia.style.transform =`translateX(${ operacion2 }%)`
})

iglesiaNext.addEventListener('click', ()=>{
    operacion2 = operacion2 - 50;
    if(operacion2 < -50){
        operacion2 = 0;
        // operacion = -99.99;
        listaIglesia.style.transform =`translateX(${ operacion2 }%)`
    }else{
        listaIglesia.style.transform =`translateX(${ operacion2 }%)`
    }
})