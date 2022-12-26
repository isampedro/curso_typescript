import HistorialClinico from "./HistorialClinico";
import DatosAdopcion from "./DatosAdopcion";

interface IPerro {
    readonly nombre: string;
    edad: number;
    raza: string;
    historialClinico: HistorialClinico;
    datosAdopcion?:  DatosAdopcion;
    madre?: IPerro;
    padre?: IPerro;

    crecer: () => void;
    serAdoptado: (datosAdopcion: DatosAdopcion) => void;
    adicionarOperacion: (operacion: string) => void;
    adicionarEnfermedad: (enfermedad: string) => void;
    adicionarInformacionPadre: (padre: IPerro) => void;
    adicionarInformacionMadre: (madre: IPerro) => void;
}

export default IPerro;

