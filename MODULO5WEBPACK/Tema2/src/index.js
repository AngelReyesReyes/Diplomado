import _ from 'lodash';
import './estilo.css';
function componente() {
    const elemento=document.createElement('div');
    //lodash simplifica operaciones como java scrip
    elemento.innerHTML=_.join(['hola','webpack'],' ');
    elemento.classList.add('hola');
    return elemento;
}

document.body.appendChild(componente());