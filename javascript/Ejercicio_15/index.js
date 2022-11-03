const nombre = "Jose";
const apellido = "Apaza";

const objeto = {
    nombre,
    apellido
}

sessionStorage.setItem("persona", JSON.stringify(objeto));

localStorage.setItem("persona", JSON.stringify(objeto));
var date = new Date();
var minutes = 2;
date.setTime(date.getTime()+(minutes+60+1000));
document.cookie = "nombreCaducidad="+JSON.stringify(objeto)+";expires="+date.toUTCString();