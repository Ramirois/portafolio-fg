const btnPrev = document.querySelector('.carousel__prev');
const btnNext = document.querySelector('.carousel__next');

const carousel = document.querySelector('.carousel__lista')
 
let operacion = 0;

btnNext.addEventListener('click', ()=>{
    operacion = operacion - 33.33;
    if(operacion <= -99.99){
        operacion = 0;
        carousel.style.transform =`translateX(${ operacion }%)`
    }else{
        carousel.style.transform =`translateX(${ operacion }%)`
    }
})

btnPrev.addEventListener('click', ()=>{
    operacion = operacion + 33.33;
    if(operacion > 0){
        operacion = 0;
        // operacion = -99.99;
        // carousel.style.transform =`translateX(${ operacion }%)`
    }else{
        carousel.style.transform =`translateX(${ operacion }%)`
    }
})