//Ejercicio 1
let arrayCompras = ["Papa", "Arroz", "Azucar", "Sal", "Leche"];
//Ejercicio 2
arrayCompras.push("Aceite de Girasol");
console.log(arrayCompras);
//Ejercicio 3
arrayCompras.pop();
console.log(arrayCompras);
//Ejercicio 4
let arrayPeliculas = [
    {titulo:"Avatar", director:"James Cameron", fecha:new Date("2010-01-01")},
    {titulo:"Avengers", director:"Russo Brothers", fecha:new Date("2019-12-08")},
    {titulo:"Star Wars 3", director:"Geaorge Lucas", fecha:new Date("2005-05-05")},
];
//Ejercicio 5
const newArrayPeliculasMayores2010 = arrayPeliculas.filter( 
        a => a.fecha.getFullYear() > 2010 
    );
console.log(newArrayPeliculasMayores2010);
//Ejercicio 6
const newArrayDirectores = arrayPeliculas.map( 
        a => a.director
    );
console.log(newArrayDirectores);
//Ejercicio 7
const newArrayTitulos = arrayPeliculas.map( 
    a => a.titulo
);
console.log(newArrayTitulos);
//Ejercicio 7
const newArrayTitulosYDirectoresConMap = arrayPeliculas.map( 
    a => `Titulo: ${a.titulo} y Director: ${a.director}`
);
console.log(newArrayTitulosYDirectoresConMap);
const newArrayTituloYDirectoresConConcat = newArrayDirectores.concat(newArrayTitulos);
console.log(newArrayTituloYDirectoresConConcat);
//Ejercicio 8
const newArrayTituloYDirectorConPropagacion = [...newArrayDirectores, ...newArrayTitulos];
console.log(newArrayTituloYDirectorConPropagacion);