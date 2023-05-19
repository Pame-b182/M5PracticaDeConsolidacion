/* /// PERSONAJES 1 - 5 \\\ */
//Función asíncrona y generadora que realiza la petición a la API de Star Wars
async function* peticionPopulares(){
    //Se guarda en let la url principal a utilizar
    let url = "https://swapi.dev/api/people/"
    //Ciclo for para que realice la petición de los personajes del 1 al 5.
    for (let i = 1; i < 6; i++) {
        try{
            let resp = await fetch(url + i);
            let json = await resp.json();
            yield json;
        }catch(e){
            console.log(e);
        }
    }
}
//Función que inyecta al html el código con la estructura, el nombre, la altura y el peso de los personajes
function inyeccionPersonajesPopulares(json){
    //Se desestructura el objeto recibido de la API
    const {name, height, mass} = json;
    let card = `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
            <div class="timeline-icon timeline-icon-populares"></div>
                <div class="timeline-text">
                    <h6>${name}</h6>
                    <p>Estatura: ${height} cm. Peso: ${mass} kg.</p>
                </div>
        </div>
    </div>

    `
    //Se inyecta la card al html, sumando las 5 de acuerdo al evento mouseover.
    document.getElementById("inyeccionPopulares").innerHTML += card;
}
//Se crea una instancia de la función generadora.
let petPopulares = peticionPopulares();

//Se escucha el evento "mouseover" y se ejecuta una función asíncrona.
document.getElementById("personajesPopulares").addEventListener('mouseover', async function(){
    //Se guarda en let el iterador "next()" de la función generadora
    let datos = await petPopulares.next();
    //Condición if, si el iterador next() tiene un valor, se inyecta al html el card.
    if(datos.value){
        inyeccionPersonajesPopulares(datos.value);
    }
})

/* /// PERSONAJES 6 - 11  \\\ */

async function* peticionSecundarios(){
    let url = "https://swapi.dev/api/people/"

    for (let i = 6; i < 11; i++) {
        try{
            let resp = await fetch(url + i);
            let json = await resp.json();
            yield json;
        }catch(e){
            console.log(e);
        }
    }
}

function inyeccionPersonajesSecundarios(json){
    const {name, height, mass} = json;
    let card = `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
            <div class="timeline-icon timeline-icon-secundarios"></div>
                <div class="timeline-text">
                    <h6>${name}</h6>
                    <p>Estatura: ${height} cm. Peso: ${mass} kg.</p>
                </div>
        </div>
    </div>

    `
    document.getElementById("inyeccionSecundarios").innerHTML += card;
}

let petSecundarios = peticionSecundarios();

document.getElementById("personajesSecundarios").addEventListener('mouseover', async function(){
    let datos = await petSecundarios.next();
    if(datos.value){
        inyeccionPersonajesSecundarios(datos.value);
    }
})

/* /// PERSONAJES 12 - 17  \\\ */

async function* peticionSignificativos(){
    let url = "https://swapi.dev/api/people/"

    for (let i = 11; i < 16; i++) {
        try{
            let resp = await fetch(url + i);
            let json = await resp.json();
            yield json;
        }catch(e){
            console.log(e);
        }
    }
}

function inyeccionPersonajesSignificativos(json){
    const {name, height, mass} = json;
    let card = `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
            <div class="timeline-icon timeline-icon-significativos"></div>
                <div class="timeline-text">
                    <h6>${name}</h6>
                    <p>Estatura: ${height} cm. Peso: ${mass} kg.</p>
                </div>
        </div>
    </div>

    `
    document.getElementById("inyeccionSignificativos").innerHTML += card;
}

let petSignificativos = peticionSignificativos();

document.getElementById("personajesSignificativos").addEventListener('mouseover', async function(){
    let datos = await petSignificativos.next();
    if(datos.value){
        inyeccionPersonajesSignificativos(datos.value);
    }
})