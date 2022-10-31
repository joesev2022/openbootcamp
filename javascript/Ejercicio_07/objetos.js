const objeto1 = {
    nombre : "José",
    apellido : "Apaza",
    edad : 26,
    altura : 1.62,
    eresDesarrollador : true
}

const objeto2 = {
    nombre : "Josue",
    apellido : "Castro",
    edad : 25,
    altura : 1.70,
    eresDesarrollador : false
}

const objeto3 = {
    nombre : "Jhossy",
    apellido : "Chirca",
    edad : 30,
    altura : 1.68,
    eresDesarrollador : false
}

const miEdad = objeto1.edad;

console.log(miEdad)

const myArray = [objeto1, objeto2, objeto3];

myArray.sort((a, b) => a.edad - b.edad);

console.log(myArray)