import _ from 'lodash';
import './estilo.css';
import Imagen from './paisaje.jpg';
import logoI from './logo.jpg';
import Datos from './datos.csv';
import yaml from './datos.yaml';
import json5 from './datos.json5';
import './estilo.scss';

function componenteL() {
    const elementoL=document.createElement('div');
    elementoL.innerHTML='San Lucas Dental';
    elementoL.classList.add('LogoStyle');
    const ImagenL=new Image();
    ImagenL.src=logoI;
    elementoL.appendChild(ImagenL);
    return elementoL;
    }

function componente() {
    const elemento=document.createElement('div');
    elemento.innerHTML=_.join(['hola:',Datos[0][1]],' ');
    elemento.classList.add('fondo');
    const miImagen=new Image();
    miImagen.src=Imagen;
    elemento.appendChild(miImagen);
    console.log(Datos);
    return elemento;
}
document.body.appendChild(componenteL());
document.body.classList.add('LogoStyle');
document.body.appendChild(componente());
document.body.classList.add('fondo')