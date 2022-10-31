let alturaEnCentimetros = 162;
let alturaEnMetros = 1.62;
let pesoEnKilogramos = 61.2;
let alturaRedondeadaArriba = Math.round(alturaEnMetros);
let alturaRedondeadaAbajo = Math.round(alturaEnMetros);
let max_valor_JS = Number.MAX_VALUE;
let max_valor_js_mas_uno = Number.MAX_VALUE + 1;

console.log("Altura en centimetros: " + alturaEnCentimetros);
console.log("Altura en metros: " + alturaEnMetros);
console.log("Peso en Kilogramos: " + pesoEnKilogramos);
console.log("Altura en metros redondeada hacia arriba: " + Math.ceil(alturaEnMetros));
console.log("Altura en metros redondeada hacia abajo: " + Math.floor(alturaEnMetros));
if (max_valor_js_mas_uno == max_valor_JS) {
    console.log("Es igual");
} else {
    console.log("No es igual");
}