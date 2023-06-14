import * as _ from 'lodash'; // codigue de typescript

function componente() {
    const elemento=document.createElement('div');
    elemento.innerHTML=_.join(['hola','webpack'],' ');
    return elemento;
}

document.body.appendChild(componente());