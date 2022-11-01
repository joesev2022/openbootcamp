//Sin parametros - Una función sin parámetros que devuelva siempre "true"
function sinParametros(){
    return true;
}

console.log(sinParametros());

//Asincrona - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const promesa = new Promise((resolve, reject) => {
    if(true){
        resolve()
    } else {
        reject()
    }
});

setTimeout(() => {
    promesa
        .then(()=>console.log("Hola soy una promesa"))
        .catch(()=>console.log("ERROR"))
}, "5000")

//Generadora - Una función generadora de índices pares automáticos
function* generarParesAutomaticos() {
    let par = 0;
    while(true){
        par++
        if ((par % 2) == 0) {
            yield  par;
        }
    }
}

const gen = generarParesAutomaticos();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
