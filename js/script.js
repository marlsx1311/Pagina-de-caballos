const botonSeleccion = document.getElementById("boton-seleccion")
const caballoGanador = document.getElementById("caballo-ganador")
const botonReiniciar = document.getElementById("boton-reiniciar")
const carreraCaballo = document.getElementById("carrera-caballos")
const nombreCaballo = document.getElementById("nombre-caballos")
const botonPartida = document.getElementById("boton-partida")
const seleccionGinete = document.getElementById("seleccion-jinete")

let arregloCaballos = []
let caballoUno = 0
let caballoDos= 0
let caballoTres = 0
let caballoCuatro = 0
let caballoCinco= 0
let caballoSeis= 0
let partidaContador = 0
let texUno
let texDos
let texTres
let texCuatro
let texCinco
let texSeis

class Jinetes{
    constructor(nombre, foto, numero){
        this.nombre = nombre
        this.foto = foto
        this.numero = numero
    }
}
let cabUno = new Jinetes("Caballo Uno", "./img/caballo1.png", 1)
console.log(cabUno.nombre)

let cabDos = new Jinetes("Caballo Dos", "./img/caballo2.png", 2)
console.log(cabUno.nombre)

let cabTres = new Jinetes("Caballo Tres", "./img/caballo3.png", 3)
console.log(cabUno.nombre)

let cabCuatro = new Jinetes("Caballo Cuatro", "./img/caballo4.png", 4)
console.log(cabUno.nombre)

let cabCinco = new Jinetes("Caballo Cinco", "./img/caballo5.png", 5)
console.log(cabUno.nombre)

let cabSeis = new Jinetes("Caballo Seis", "./img/caballo6.png", 6)
console.log(cabUno.nombre)

arregloCaballos.push(cabUno,cabDos,cabTres,cabCuatro,cabCinco,cabSeis)

console.log(arregloCaballos)

function cargarPagina(){
    carreraCaballo.style.display = "none"
    botonSeleccion.addEventListener("click", seleccionar)
    botonReiniciar.addEventListener("click", reiniciar)
    botonPartida.addEventListener("click", partida)

}
function seleccionar(){
    let primeroUno = document.getElementById("primero").value
    let segundoDos = document.getElementById("segundo").value
    let terceroTres = document.getElementById("tercero").value
    let cuartoCuatro = document.getElementById("cuarto").value
    let quintoCinco = document.getElementById("quinto").value
    let sextoSeis = document.getElementById("sexto").value

    carreraCaballo.style.display ="block"
    nombreCaballo.style.display = "none"
    seleccionGinete.innerHTML = "J1: "+ primeroUno+" J2: "+ segundoDos+" J3: "+ terceroTres+"J4: "+ cuartoCuatro+"J5: "+ quintoCinco+" J6: "+ sextoSeis
    
    texUno = primeroUno
    texDos = segundoDos
    texTres = terceroTres
    texCuatro = cuartoCuatro
    texCinco = quintoCinco
    texSeis = sextoSeis

}
    

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function partida(){
    
    
    while(partidaContador == 0){
        if (caballoUno == 10){
            partidaContador++
            caballoGanador.innerHTML = "El GANADOR ES EL CABALLO 1 CON EL JINETE: " +texUno
        }else if (caballoDos == 10){
            partidaContador++
            caballoGanador.innerHTML = "El GANADOR ES EL CABALLO 2 CON EL JINETE: " +texDos
        } else if (caballoTres == 10){
            partidaContador++
            caballoGanador.innerHTML = "El GANADOR ES EL CABALLO 3 CON EL JINETE: " +texTres
        }else if (caballoCuatro == 10){
            partidaContador++
            caballoGanador.innerHTML = "El GANADOR ES EL CABALLO 4 CON EL JINETE: " +texCuatro
        }else if (caballoCinco == 10){
            partidaContador++
            caballoGanador.innerHTML = "El GANADOR ES EL CABALLO 5 CON EL JINETE: " +texCinco
        }else if (caballoSeis == 10){
            partidaContador++
            caballoGanador.innerHTML = "El GANADOR ES EL CABALLO 6 CON EL JINETE: " +texSeis
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
    //console.log(contadorAleatorio)
}
function reiniciar(){
    window.location.reload()
}

window.addEventListener("load",cargarPagina )