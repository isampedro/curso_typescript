import Funcion from "../Interfaces/Funcion";

export default abstract class Combinacion implements Funcion {
    izquierda: Funcion;
    derecha: Funcion;

    constructor(izquierda: Funcion, derecha: Funcion) {
        this.izquierda = izquierda;
        this.derecha = derecha;
    }

    abstract evaluar(x: number): number;
}

