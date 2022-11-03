function obtenerFibonacci(num){
    let sum = 1; let num1 = 0; let num2 = 1; let array = [];
    for (let i = 0; i < num; i++) {
        array[i] = sum;
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return array;
}

const resultado = obtenerFibonacci(6);
console.log(resultado);