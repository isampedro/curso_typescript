interface Nodo<T> {
    elemento: T;
    siguiente?: Nodo<T>;
}

interface ICola<T> {
    primerElemento?: Nodo<T>;

    adicionarElemento: (elemento: T) => Cola<T>;
    imprimirCola: () => void;
}

class Cola<T> implements ICola<T> {
    primerElemento?: Nodo<T>;

    adicionarElemento(elemento: T): Cola<T> {
        let nodoActual = this.primerElemento;

        if( !nodoActual ) {
            this.primerElemento = {
                elemento: elemento,
                siguiente: this.primerElemento
            };
        } else {
            while( !!nodoActual ) {
                if( !nodoActual.siguiente) {
                    nodoActual.siguiente = {
                        elemento: elemento,
                        siguiente: nodoActual.siguiente
                    };
                    nodoActual = nodoActual.siguiente.siguiente;
                } else {
                    nodoActual = nodoActual.siguiente;
                }
            }
        }
        return this;
    }

    imprimirCola(): void {
        let nodoActual = this.primerElemento;
        while( !!nodoActual ) {
            console.log(nodoActual.elemento)
            nodoActual = nodoActual.siguiente;
        }
    }
}

const testCola = () => {
    const colaDeNumeros = new Cola<number>();
    colaDeNumeros.adicionarElemento(1).adicionarElemento(2).
    adicionarElemento(27).adicionarElemento(40);
    colaDeNumeros.imprimirCola();
}

testCola();