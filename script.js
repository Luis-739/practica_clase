/*
let BASE_URL ="http://localhost:3000"

//Asinc-await
async function obtenerPlatillos(){
    let respuesta = await fetch(`${BASE_URL}/platillos`, {
    }) //await pausa la ejercución del resto del código hasta que la promesa temine.
    console.log(respuesta);
    let respuestaJson = await respuesta.json();
    console.log(respuestaJson);

    document.getElementById("platillo").innerText = respuestaJson[0].nombre;
    document.getElementById("imagenPlatillo").setAttribute("src", respuestaJson[0].imagen);
    document.getElementById("precio").innerText = respuestaJson[0].precio;
}

async function obtenerPlatillos1(){
    let respuesta = await fetch(`${BASE_URL}/platillos`, {
    }) //await pausa la ejercución del resto del código hasta que la promesa temine.
    console.log(respuesta);
    let respuestaJson1 = await respuesta.json();
    console.log(respuestaJson1);

    document.getElementById("platillo1").innerText = respuestaJson1[1].nombre;
    document.getElementById("imagenPlatillo1").setAttribute("src", respuestaJson1[1].imagen);
    document.getElementById("precio1").innerText = respuestaJson1[1].precio;
}

async function obtenerPlatillos2(){
    let respuesta = await fetch(`${BASE_URL}/platillos`, {
    }) //await pausa la ejercución del resto del código hasta que la promesa temine.
    console.log(respuesta);
    let respuestaJson2 = await respuesta.json();
    console.log(respuestaJson2);

    document.getElementById("platillo2").innerText = respuestaJson2[2].nombre;
    document.getElementById("imagenPlatillo2").setAttribute("src", respuestaJson2[2].imagen);
    document.getElementById("precio2").innerText = respuestaJson2[2].precio;
}

async function obtenerPlatillos3(){
    let respuesta = await fetch(`${BASE_URL}/platillos`, {
    }) //await pausa la ejercución del resto del código hasta que la promesa temine.
    console.log(respuesta);
    let respuestaJson3 = await respuesta.json();
    console.log(respuestaJson3);

    document.getElementById("platillo3").innerText = respuestaJson3[3].nombre;
    document.getElementById("imagenPlatillo3").setAttribute("src", respuestaJson3[3].imagen);
    document.getElementById("precio3").innerText = respuestaJson3[3].precio;
}

async function obtenerPlatillos4(){
    let respuesta = await fetch(`${BASE_URL}/platillos`, {
    }) //await pausa la ejercución del resto del código hasta que la promesa temine.
    console.log(respuesta);
    let respuestaJson4 = await respuesta.json();
    console.log(respuestaJson4);

    document.getElementById("platillo4").innerText = respuestaJson4[4].nombre;
    document.getElementById("imagenPlatillo4").setAttribute("src", respuestaJson4[4].imagen);
    document.getElementById("precio4").innerText = respuestaJson4[4].precio;
}

async function obtenerPlatillos5(){
    let respuesta = await fetch(`${BASE_URL}/platillos`, {
    }) //await pausa la ejercución del resto del código hasta que la promesa temine.
    console.log(respuesta);
    let respuestaJson5 = await respuesta.json();
    console.log(respuestaJson5);

    document.getElementById("platillo5").innerText = respuestaJson5[5].nombre;
    document.getElementById("imagenPlatillo5").setAttribute("src", respuestaJson5[5].imagen);
    document.getElementById("precio5").innerText = respuestaJson5[5].precio;
}




obtenerPlatillos();
obtenerPlatillos1();
obtenerPlatillos2();
obtenerPlatillos3();
obtenerPlatillos4();
obtenerPlatillos5();
*/








const BASE_URL = "http://localhost:3000";

async function obtenerYMostrarPlatillos() {
    try {
        const respuesta = await fetch(`${BASE_URL}/platillos`);
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        
        const platillos = await respuesta.json();
        console.log("Platillos recibidos:", platillos); // Para depuración
        
        if (!platillos || platillos.length === 0) {
            console.log("No hay platillos disponibles");
            return;
        }
        
        // Mostrar cada platillo
        platillos.forEach((platillo, index) => {
            console.log(`Procesando platillo ${index}:`, platillo); // Para depuración
            
            const platilloElement = document.getElementById(`platillo${index}`);
            const imagenElement = document.getElementById(`imagenPlatillo${index}`);
            const precioElement = document.getElementById(`precio${index}`);
            
            if (platilloElement && imagenElement && precioElement) {
                platilloElement.textContent = platillo.nombre;
                imagenElement.src = platillo.imagen;
                imagenElement.alt = platillo.nombre;
                precioElement.textContent = `$${platillo.precio}`;
            } else {
                console.warn(`Elementos no encontrados para platillo ${index}`);
            }
        });
        
    } catch (error) {
        console.error("Error al obtener los platillos:", error);
        // Puedes mostrar un mensaje de error al usuario si lo deseas
    }
}

// Llamar a la función cuando se cargue la página
document.addEventListener('DOMContentLoaded', obtenerYMostrarPlatillos);












/*
async function agregarPlatillo() {
    let nuevoPlatillo = await fetch()
    let respuesta = await fetch(`${BASE_URL}/platillos`, {  
        method: 'POST',
        body: JSON.stringify()
        })
};
*/