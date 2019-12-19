const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const btn = document.getElementById('btn');

window.onload = (event) =>{
    setGradient();
    }

function setGradient () {
    body.style.background = 
    'linear-gradient(to right, ' 
    + color1.value 
    + ', '
    + color2.value 
    + ')';

    css.textContent = body.style.background + ';';
}

function randomColor () {
    let rr = Math.floor(Math.random() * 89) +10;
    let gg = Math.floor(Math.random() * 89) +10;
    let bb = Math.floor(Math.random() * 89) +10;
    let rr2 = Math.floor(Math.random() * 89) +10;
    let gg2 = Math.floor(Math.random() * 89) +10;
    let bb2 = Math.floor(Math.random() * 89) +10;
    
    color1.value = `#${rr}${gg}${bb}`;
    color2.value = `#${rr2}${gg2}${bb2}`;

    setGradient();
}


color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

btn.addEventListener('click', randomColor);
