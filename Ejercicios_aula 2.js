
let datoDelPeso;
let datoDeAltura;

function verificarUsuario(){
    datoDelPeso = parseInt(document.getElementById("valorUsuario").value);
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.querySelector("#boton1").setAttribute("disabled", "true");
    llamadaDeElemento("p", "Introduce tu altura");
    limpiarCaja();
    return datoDelPeso;
 }

 function Reiniciar(){
    datoDeAltura = parseInt(document.getElementById("valorUsuario").value);
    document.getElementById("boton1").removeAttribute("disabled");
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
    limpiarCaja();
    llamadaDeElemento("p", `El indice de masa es:${calculo()}`);
    return datoDeAltura;
 }


 function limpiarCaja(){
    document.querySelector("#valorUsuario").value="";
 }

 function llamadaDeElemento(parametro, texto){
     let elementoHtml=document.querySelector(parametro);
     elementoHtml.innerHTML  = texto;
     return;
 }
 function calculo(){
    return datoDelPeso/(datoDeAltura*datoDeAltura);

 }
 
 llamadaDeElemento("h1", "Calculadora de Indice de Masa corporal")
 llamadaDeElemento("p", "Introduce tu peso")

