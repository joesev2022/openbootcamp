const fechaActual = new Date();
console.log(fechaActual);
const fechaDeNacimiento = new Date(1995,11,28);
console.log(fechaDeNacimiento);
const esMasTarde = fechaActual > fechaDeNacimiento;
console.log(esMasTarde);
diaDeNacimiento = fechaDeNacimiento.getDay();
console.log(diaDeNacimiento);
mesDeNacimiento = fechaDeNacimiento.getMonth();
console.log(mesDeNacimiento + 1);
anioDeNacimiento = fechaDeNacimiento.getFullYear();
console.log(anioDeNacimiento);