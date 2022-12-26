import IEquipo from "../Modelos/IEquipo";

export default class Equipo implements IEquipo {
    private readonly _club: string;
    private readonly _edadPromedio: number;
    private readonly _liga: string;
    private readonly _porcentajeVMTop18Jugadores: number;
    private readonly _tamanioEquipo: number;
    private readonly _vMPromedioJugador: number;
    private readonly _valorMercado: number;
    private readonly _vmTop18Jugadores: number;

    get club(): string {
        return this._club;
    }

    get edadPromedio(): number {
        return this._edadPromedio;
    }

    get liga(): string {
        return this._liga;
    }

    get porcentajeVMTop18Jugadores(): number {
        return this._porcentajeVMTop18Jugadores;
    }

    get tamanioEquipo(): number {
        return this._tamanioEquipo;
    }

    get vMPromedioJugador(): number {
        return this._vMPromedioJugador;
    }

    get valorMercado(): number {
        return this._valorMercado;
    }

    get vmTop18Jugadores(): number {
        return this._vmTop18Jugadores;
    }

    constructor(club: string, liga: string, edadPromedio: number, tamanioEquipo: number, valorMercado: number,
                vMPromedioJugador: number, vmTop18Jugadores: number, porcentajeVMTop18Jugadores: number) {
        this._club = club;
        this._edadPromedio = edadPromedio;
        this._liga = liga;
        this._porcentajeVMTop18Jugadores = porcentajeVMTop18Jugadores;
        this._tamanioEquipo = tamanioEquipo;
        this._vMPromedioJugador = vMPromedioJugador;
        this._valorMercado = valorMercado;
        this._vmTop18Jugadores = vmTop18Jugadores;
    }

    public toJson(): Partial<IEquipo> {
        return {
            liga: this._liga,
            porcentajeVMTop18Jugadores: this._porcentajeVMTop18Jugadores,
            tamanioEquipo: this._tamanioEquipo,
            vMPromedioJugador: this._vMPromedioJugador,
            valorMercado: this._valorMercado,
            vmTop18Jugadores: this._vmTop18Jugadores,
            club: this._club,
            edadPromedio: this._edadPromedio
        }
    }
}

