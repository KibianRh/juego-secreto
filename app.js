



let secret = 0;
let intentos = 1; 
let numSorteado = []
let maxNum = 10;

function asignar(Elemento, texto){
    let elementoHtml = document.querySelector(Elemento)
    elementoHtml.innerHTML = texto
}



function verificacion() {
    let numeroUsuario = parseInt(document.getElementById("userNum").value)
    
    if(numeroUsuario === secret){
        asignar("p", `si, lo adivinaste en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`)
        document.getElementById("reiniciar").removeAttribute("disabled")
    }
    else{
        if(numeroUsuario > secret){
            asignar("p", "Es menor")
        }
        else{
            asignar("p", "es mayor")
        }
        intentos++
        clear();
    }
}


function clear() {
    document.getElementById("userNum").value ="";
}

function numSecret() {
    let secretNum = Math.floor(Math.random() *maxNum)+1;

    console.log(secretNum)
    console.log(numSorteado)

    if(numSorteado.length == maxNum){
        asignar("p", "Ya han salido todos los numeros posibles")
    }else{

    

    if(numSorteado.includes(secretNum)){
        return numSecret()
    }else{
        numSorteado.push(secretNum);
        return secretNum;
    }
}

}

function condiciones() {

    asignar("h1", "adivina el numero")
    asignar("p", `elije un numero del 1 al ${maxNum}`)
    secret = numSecret();
    intentos = 1;
}

function resetGame() {
    clear();
    condiciones();
    document.getElementById("reiniciar").setAttribute("disabled", "true")
}


condiciones()

