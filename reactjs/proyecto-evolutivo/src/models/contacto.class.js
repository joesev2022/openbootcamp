import { ESTADO } from "./estado.enum";

export class Contacto {
    nombre = '';
    apellido = '';
    email = '';
    conectado = ESTADO.CONECTADO;

    constructor(nombre, apellido, email, conectado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    }
}