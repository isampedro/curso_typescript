import Equipos from "../Consultas/Equipos";


async function main() {
    const equipos = new Equipos();
    await equipos.leerEquipos('equipos_mas_valiosos.xlsx');

    const equipo = equipos.obtenerEquipo('Aston Villa');
    if( !!equipo ) {
        console.log(equipo.toJson()) // Astom
    }

    const primerosNEquipos = equipos.obtenerPrimerosN(5);
    console.log(primerosNEquipos.map(equipo => equipo.toJson())); // Aston,  Manchester C, Paris, Manchester U, Liverpool

    const edadPromedioPrimerosN = equipos.obtenerEdadPromedioPrimerosN(5);
    console.log(edadPromedioPrimerosN) // 135.1

}

main();
