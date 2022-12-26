export default interface IEquipo {
    club: string;
    liga: string;
    edadPromedio: number;
    tamanioEquipo: number;
    valorMercado: number
    vMPromedioJugador: number;
    vmTop18Jugadores: number;
    porcentajeVMTop18Jugadores: number;
    toJson: () => Partial<IEquipo>;
}

