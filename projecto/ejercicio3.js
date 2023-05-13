
/*
Eventos
Formularios
Onload
Agregar Listener
*/
function Formulario() {
        var Ciudad=document.getElementById("Ciudad").value; //obtenemos el valor capturado desde el formulario
        if (Ciudad === null || Ciudad==='' ) {
            return alert('El nombre de la ciudad no puede estar vacío');
        } else {
            ApiClima(Ciudad);
        }
}

async function ApiClima(FoundCity) {    
      fetch("http://api.weatherstack.com/current?access_key=6e90546194754e71693c66195816c517&query="+FoundCity)
            .then((response) => response.json())
            .then((res) => {
                //console.log(JSON.stringify(res));
                //document.querySelector('#content').innerHTML = JSON.stringify(res);
                //alert(res.current.temperature);
                console.log(res);
                alert("La temperatura actual  de: "+FoundCity +" es de:"+res.current.temperature+"grados");
             })
             .catch((res) => {
                alert('error');
                console.log(res);
             });    
}

function CambioColor() {
    document.body.style.background="grey";
}

const boton=document.getElementById("btn");
boton.addEventListener('click',Listener);
/*
    boton.addEventListener("click",function(){
        alert("Evento activado atravéz de un listener");
    });
    */
    //es para poder escuchar un evento
    function Listener() {
        alert("El evento se ctivó");
    }
function eleminarvento() {
    const Eliminar=document.getElementById("btnEliminar");
    Eliminar.removeEventListener("click",Listener);
    alert("Eliminado evento")
}