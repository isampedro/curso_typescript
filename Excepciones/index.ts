import Polinomica from "../Funciones/Clases/Polinomica";
import Funcion from "../Funciones/Interfaces/Funcion";
import ArgumentoNoEsNumeroError from "./ArgumentosNoEsNumeroError";
import NumeroEsNegativoError from "./NumeroEsNegativoError";
const prompt = require("prompt-sync")({ sigint: true });



const leerNumero = (): number | never => {
    const nuevoNumero = parseFloat(prompt('Por favor, ingrese un número para evaluar la función: '));
    if( isNaN(nuevoNumero) ) {
        throw new ArgumentoNoEsNumeroError;
    }
    if (nuevoNumero < 0) {
        throw new NumeroEsNegativoError;
    }
    return nuevoNumero;
}

const main = (): void => {
    let funcionPoderosa: Funcion = new Polinomica([0,0,1]) // f(x) = x^2
    let numeros: number[] = [];
    let nuevoNumero: number;
    while( numeros.length < 5 ) {
        try {
            nuevoNumero = leerNumero();
            numeros.push(nuevoNumero);
        } catch (e: any) {
            console.log(e);
            if( e instanceof  ArgumentoNoEsNumeroError ) {
                console.log('Ha ingresado un valor erróneo.', e.message);
            }
            if(e instanceof NumeroEsNegativoError) {
                console.log('Ha ingresado un valor erróneo.', e.message);
            }
        }
    }

    for( let numero of numeros) {
        console.log(funcionPoderosa.evaluar(numero));
    }
}

main();