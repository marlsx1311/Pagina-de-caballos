const botonSeleccion = document.getElementById("boton-seleccion")
const caballoGanador = document.getElementById("caballo-ganador")
const botonReiniciar = document.getElementById("boton-reiniciar")

let caballoUno = 0
let caballoDos= 0
let caballoTres = 0
let caballoCuatro = 0
let caballoCinco= 0
let caballoSeis= 0
let partidaContador = 0

function cargarPagina(){
    botonSeleccion.addEventListener("click", seleccionar)
    botonReiniciar.addEventListener("click", reiniciar)
}
function seleccionar(){
    partida()
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function partida(){
    while(partidaContador == 0){
        if (caballoUno == 10){
            partidaContador++
            caballoGanador.innerHTML = "gano el caballo 1"
        }else if (caballoDos == 10){
            partidaContador++
            caballoGanador.innerHTML = "gano el caballo 2"
        } else if (caballoTres == 10){
            partidaContador++
            caballoGanador.innerHTML = "gano el caballo 3"
        }else if (caballoCuatro == 10){
            partidaContador++
            caballoGanador.innerHTML = "gano el caballo 4"
        }else if (caballoCinco == 10){
            partidaContador++
            caballoGanador.innerHTML = "gano el caballo 5"
        }else if (caballoSeis == 10){
            partidaContador++
            caballoGanador.innerHTML = "gano el caballo 6"
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