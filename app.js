let intentos;
let numeroSecreto;
let listaNumerosSorteados = [];
let limiteNumero = 10;

function verificarUsuario(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroDeUsuario);
    intentos ++;
    console.log(intentos);
    if (numeroDeUsuario===numeroSecreto){
        llamadaDeElemento("p",`Acertas es el numero secreo en ${intentos} ${(intentos==1)?"intento":"intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else if (numeroDeUsuario>numeroSecreto){
        llamadaDeElemento("p","El numero es menor");
        limpiarCaja();
    }else{
        llamadaDeElemento("p","El numero secreto es mayor");
        limpiarCaja();
    }
    return;
 }
 function limpiarCaja(){
    document.querySelector("#valorUsuario").value="";
 }

function Reiniciar(){
    //Limpiar caja
    limpiarCaja();
    //indicar intervalo de numeros
    //numero de intentos
    //generar nuevo numero
    condicinesIniciales();
    //generar nuevo numero
    //Desabilitar el botton de nuevo juegor
    //numero de intentos
    document.querySelector("#reiniciar").setAttribute("disabled", "true");

}

 function llamadaDeElemento(parametro, texto){
     let elementoHtml=document.querySelector(parametro);
     elementoHtml.innerHTML  = texto;
     return;
 }
 
 function generarNumeroSecreto(){
     let numeroGenerado = Math.floor((Math.random()*limiteNumero)+1);
     console.log(numeroGenerado);
     console.log(listaNumerosSorteados);
     //checar si ya paso todos los numeros 
     if(listaNumerosSorteados.length==limiteNumero) {
       listaNumerosSorteados=[];
     }
     //Checar numeros de la lista
     else {
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
            } 
    }
 }

 function condicinesIniciales(){
    llamadaDeElemento("h1","El desafio a comenzado");
    llamadaDeElemento("p",`Introduce un numero del 1 al ${limiteNumero}`);
    intentos = 0;
    numeroSecreto = generarNumeroSecreto();
}

condicinesIniciales();
console.log(numeroSecreto);
