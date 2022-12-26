import Combinacion from "./Combinacion";

export default class Composicion extends Combinacion {
    evaluar(x: number): number {
        return this.izquierda.evaluar(this.derecha.evaluar(x));
    }
}

