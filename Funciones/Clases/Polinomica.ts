import Funcion from "../Interfaces/Funcion";

export default class Polinomica implements Funcion {
    private polinomio: number[];
    private grado: number;

    constructor( polinomio: number []) {
        this.polinomio = polinomio;
        this.grado = polinomio.length - 1;
    }

    evaluar(x: number): number {
        let res = 0;
        for( let i = 0; i < this.polinomio.length; i++ ) {
            res += Math.pow(x, i)*this.polinomio[i];
        }
        return res;
    }

}

