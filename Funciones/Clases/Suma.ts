import Combinacion from "./Combinacion";

export default class Suma extends Combinacion {
    evaluar(x: number): number {
        return this.izquierda.evaluar(x) + this.derecha.evaluar(x);
    }

}

