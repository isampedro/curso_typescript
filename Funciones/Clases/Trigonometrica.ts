import Funcion from "../Interfaces/Funcion";

export enum FUNCIONES_TRIGONOMETRICAS {
    SIN, COS, TAN
}

export default class Trigonometrica implements Funcion {
    private tipo: FUNCIONES_TRIGONOMETRICAS;

    constructor( tipo: FUNCIONES_TRIGONOMETRICAS ) {
        this.tipo = tipo;
    }

    evaluar(x: number): number {
        switch(this.tipo) {
            case FUNCIONES_TRIGONOMETRICAS.SIN: return Math.sin(x);
            case FUNCIONES_TRIGONOMETRICAS.COS: return Math.cos(x);
            case FUNCIONES_TRIGONOMETRICAS.TAN: return Math.tan(x);
        }
    }

}

