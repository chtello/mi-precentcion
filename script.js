const l = document.getElementsByClassName("listo");
let aux = document.getElementById("barra");
let desc ="";
//responde a "quien soy"
let yo = "¡Hola! Yo soy Cristian y tengo 15 años  ";
function mi() {
    desc = eval(aux.value);
    aux.value = yo;
}
//responde a "mis gustos"
let gus = "Personalmente me gusta salir con mis amigos, jugar futbol, escuchar música, viajar y conocer lugraes nuevos"
function gustos() {
    desc = eval(aux.value);
    aux.value = gus;
}
//esto responde a ""
let amigous ="A pesar de que tengo muchos amigos los ma s sercanos son Hernan, Martina, Thiago, Heredia, Dante y Lauty";
function ami() {
    desc = eval(aux.value);
    aux.value = amigous;
}
//esto responde a ""
let ido ="Mi mayoridolo es Cristian Gabriel Romero, jugaador de futbol";
function idolo() {
    desc = eval(aux.value);
    aux.value = ido;
}
//esto se encarga de limpiar la barra de navegación
let terminamos ="";
function list(i) {
    if (l) {
        document.getElementById("barra").value = i;
    } 
  }