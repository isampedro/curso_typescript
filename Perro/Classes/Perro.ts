import IPerro from "../Interfaces/IPerro";
import HistorialClinico from "../Interfaces/HistorialClinico";
import DatosAdopcion from "../Interfaces/DatosAdopcion";

class Perro implements IPerro {
    private _nombre: string;
    private _edad: number;
    private _raza: string;
    private _historialClinico: HistorialClinico;
    private _madre?: IPerro;
    private _padre?: IPerro;
    private _datosAdopcion?: DatosAdopcion;

    constructor( nombre: string, edad: number, raza: string, historialClinico?: HistorialClinico, datosAdopcion?: DatosAdopcion, madre?: IPerro, padre?: IPerro) {
        this._nombre = nombre;
        this._edad = edad;
        this._raza = raza;
        this._datosAdopcion = datosAdopcion;
        this._madre = madre;
        this._padre = padre;

        if( !!historialClinico ) {
            this._historialClinico = {
                enfermedades: [],
                operaciones: [],
            }
        }
    }

    get nombre(): string {
        return this._nombre;
    }

    get edad(): number {
        return this._edad;
    }

    get raza(): string {
        return this._raza;
    }

    get historialClinico(): HistorialClinico {
        return this._historialClinico;
    }

    get madre(): IPerro {
        return this._madre;
    }

    get padre(): IPerro {
        return this._padre;
    }

    get datosAdopcion(): DatosAdopcion {
        return this._datosAdopcion;
    }

    crecer(): void {
        this._edad++;
    }

    serAdoptado(datosAdopcion: DatosAdopcion): void {
        this._datosAdopcion = datosAdopcion;
    }

    adicionarEnfermedad(enfermedad: string): void {
        if( !!enfermedad ) {
            this._historialClinico.enfermedades.push(enfermedad)
        }
    }

    adicionarOperacion(operacion: string): void {
        if( !!operacion ) {
            this._historialClinico.operaciones.push(operacion);
        }
    }

    adicionarInformacionMadre(madre: IPerro): void {
        this._madre = madre;
    }

    adicionarInformacionPadre(padre: IPerro): void {
        this._padre = padre;
    }
}

export default Perro;