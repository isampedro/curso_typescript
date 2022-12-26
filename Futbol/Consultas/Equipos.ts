import * as dfd from 'danfojs-node';
import Equipo from "../Clases/Equipo";

enum INDICE_DATO {
    CLUB, LIGA, EDAD_PROMEDIO, TAMANIO_EQUIPO, VALOR_MERCADO,
    VM_PROMEDIO_JUGADOR, VM_TOP_18_JUGADORES, PORCENTAJE_VM_TOP_18_JUGADORES
}

export default class Equipos {

    private _equipos: any; // Danfo tiene problemas con el tipo DataFrame en readExcel

    public leerEquipos = async (nombreArchivo: string): Promise<void | Error> => {
        try {
            this._equipos = await dfd.readExcel(nombreArchivo);
        } catch (e) {
            console.log(e)
            throw new Error('Ha fallado la lectura del archivo');
        }
    }

    public obtenerEquipo = (equipo: string): Equipo | null => {
        if (this._equipos.Club.str.includes(equipo)) {
            const equipoObtenido = this._equipos.query(this._equipos.Club.eq(equipo));
            const equipoObtenidoDatos = equipoObtenido.values[0];

            return new Equipo(equipoObtenidoDatos[0], equipoObtenidoDatos[1], equipoObtenidoDatos[2], equipoObtenidoDatos[3],
                equipoObtenidoDatos[4], equipoObtenidoDatos[5], equipoObtenidoDatos[6], equipoObtenidoDatos[7]);
        }

        return null;
    }

    public obtenerPrimerosN = (n: number): Equipo[] => {
        const equiposOrdenados = this._equipos.sortValues("Valor_Mercado(m)", {ascending: false});
        const primerosNDatos = equiposOrdenados.values.slice(0, n);

        return primerosNDatos.map((equipoDatos: any[]) => new Equipo(equipoDatos[INDICE_DATO.CLUB], equipoDatos[INDICE_DATO.LIGA], equipoDatos[INDICE_DATO.EDAD_PROMEDIO],
            equipoDatos[INDICE_DATO.TAMANIO_EQUIPO], equipoDatos[INDICE_DATO.VALOR_MERCADO],
            equipoDatos[INDICE_DATO.VM_PROMEDIO_JUGADOR], equipoDatos[INDICE_DATO.VM_TOP_18_JUGADORES],
            equipoDatos[INDICE_DATO.PORCENTAJE_VM_TOP_18_JUGADORES]));
    }

    public obtenerEdadPromedioPrimerosN = (n: number): number => {
        const equiposOrdenados = this._equipos.sortValues("Valor_Mercado(m)", {ascending: false});
        const primerosNDatos = equiposOrdenados.values.slice(0, n);
        const primerosN = primerosNDatos.map((equipoDatos: any[]) => new Equipo(equipoDatos[INDICE_DATO.CLUB], equipoDatos[INDICE_DATO.LIGA], equipoDatos[INDICE_DATO.EDAD_PROMEDIO],
            equipoDatos[INDICE_DATO.TAMANIO_EQUIPO], equipoDatos[INDICE_DATO.VALOR_MERCADO],
            equipoDatos[INDICE_DATO.VM_PROMEDIO_JUGADOR], equipoDatos[INDICE_DATO.VM_TOP_18_JUGADORES],
            equipoDatos[INDICE_DATO.PORCENTAJE_VM_TOP_18_JUGADORES]));

        return primerosN.reduce(((acum: number, actual: Equipo) => acum + actual.edadPromedio), 0);
    }
}

