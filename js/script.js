const botonSeleccion = document.getElementById("boton-seleccion")
const caballoGanador = document.getElementById("caballo-ganador")
const botonReiniciar = document.getElementById("boton-reiniciar")
const carreraCaballo = document.getElementById("carrera-caballos")
const nombreCaballo = document.getElementById("nombre-caballos")
const botonPartida = document.getElementById("boton-partida")
const seleccionGinete = document.getElementById("seleccion-jinete")

let caballoUno = 0
let caballoDos= 0
let caballoTres = 0
let caballoCuatro = 0
let caballoCinco= 0
let caballoSeis= 0
let partidaContador = 0

class Jinetes{
    constructor(nombre, foto, numero){
        
    }
}


function cargarPagina(){
    carreraCaballo.style.display = "none"
    botonSeleccion.addEventListener("click", seleccionar)
    botonReiniciar.addEventListener("click", reiniciar)
    botonPartida.addEventListener("click", partida)

}
function seleccionar(){
    carreraCaballo.style.display ="block"
    nombreCaballo.style.display = "none"
    seleccionGinete.innerHTML = "J1: "+ primeroUno+" J2: "+ segundoDos+" J3: "+ terceroTres+"J4: "+ cuartoCuatro+"J5: "+ quintoCinco+" J6: "+ sextoSeis
    
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function partida(){
    let primeroUno = document.getElementById("primero").value
    let segundoDos = document.getElementById("segundo").value
    let terceroTres = document.getElementById("tercero").value
    let cuartoCuatro = document.getElementById("cuarto").value
    let quintoCinco = document.getElementById("quinto").value
    let sextoSeis = document.getElementById("sexto").value
    
    while(partidaContador == 0){
        if (caballoUno == 10){
            partidaContador++
            caballoGanador.innerHTML = "El GANADOR ES EL CABALLO 1 CON EL JINETE: " +primeroUno
        }else if (caballoDos == 10){
            partidaContador++
            caballoGanador.innerHTML = "El GANADOR ES EL CABALLO 2 CON EL JINETE: " +segundoDos
        } else if (caballoTres == 10){
            partidaContador++
            caballoGanador.innerHTML = "El GANADOR ES EL CABALLO 3 CON EL JINETE: " +terceroTres
        }else if (caballoCuatro == 10){
            partidaContador++
            caballoGanador.innerHTML = "El GANADOR ES EL CABALLO 4 CON EL JINETE: " +cuartoCuatro
        }else if (caballoCinco == 10){
            partidaContador++
            caballoGanador.innerHTML = "El GANADOR ES EL CABALLO 5 CON EL JINETE: " +quintoCinco
        }else if (caballoSeis == 10){
            partidaContador++
            caballoGanador.innerHTML = "El GANADOR ES EL CABALLO 6 CON EL JINETE: " +sextoSeis
        }else{
            contador()
        }
    }
}
function contador(){
    let contadorAleatorio = aleatorio(1,6)
    if(contadorAleatorio == 1){
        caballoUno++
    }else if(contadorAleatorio == 2){
        caballoDos++
    }else if(contadorAleatorio == 3){
        caballoTres++
    }else if(contadorAleatorio == 4){
        caballoCuatro++
    }else if(contadorAleatorio == 5){
        caballoCinco++
    }else if(contadorAleatorio == 6){
        caballoSeis++
    }
    console.log(contadorAleatorio)
}
function reiniciar(){
    window.location.reload()
}

window.addEventListener("load",cargarPagina )