class Estudiante {
    nombre;
    asignaturas;
    
    constructor(nombre, asignaturas){
        this.nombre = nombre;
        this.asignaturas = asignaturas;
    }

    obtenerDatos(){
        console.log(`El nombre del estudiante es: ${this.nombre} y está en las asignaturas: ${this.asignaturas}`);
    }
}

const estudiante_1 = new Estudiante("Miguel", ['HTML', 'CSS', 'JavaScript']);
estudiante_1.obtenerDatos();