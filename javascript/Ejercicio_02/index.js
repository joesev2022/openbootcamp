// Objeto Libro
const libro = {
    titulo : "Steve Jobs",
    autor : "Walter Issacson",
    fecha : new Date (2011, 9, 24),
    url : "https://www.amazon.com/-/es/Walter-Isaacson/dp/030795028X"
}

// Objeto Persona
const persona = {
    nombre : "José",
    edad : 26,
    eresDesarrollador : true,
    fechaNacimiento : new Date(1995, 11, 28),
    libro : libro
}

const lista = new Array(persona);
console.log(lista);