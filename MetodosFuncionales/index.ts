interface Alumno {
    id: number;
    nombre: string;
    notaCursada: number;
}

const juan: Alumno = {id: 1, nombre: 'Juan', notaCursada: 7}, pedro: Alumno = {id: 2, nombre: 'Pedro', notaCursada: 5},
    ariel: Alumno = {id: 3, nombre: 'Ariel', notaCursada: 6},
    micaela: Alumno = {id: 4, nombre: 'Micaela', notaCursada: 8},
    martina: Alumno = {id: 5, nombre: 'Martina', notaCursada: 3},
    camila: Alumno = {id: 6, nombre: 'Camila', notaCursada: 9},
    diana: Alumno = {id: 7, nombre: 'Diana', notaCursada: 7};



let alumnos: readonly Alumno[] = [juan, pedro, ariel, micaela, martina, camila, diana];

let alumnosAprobados: Alumno[] = [];
for (let alumno of alumnos) {
    if (alumno.notaCursada >= 6) {
        alumnosAprobados.push(alumno);
    }
}

console.log(alumnosAprobados);

alumnosAprobados = [];
alumnos.forEach(alumno => {
    if (alumno.notaCursada >= 6) {
        alumnosAprobados.push(alumno);
    }
})

console.log(alumnosAprobados);

interface AlumnoModificado extends Alumno {
    aprobado: boolean;
}

let alumnosModificadosDificil: AlumnoModificado[] = [];
for( let alumno of alumnos ) {
    alumnosModificadosDificil.push({ ...alumno, ...{aprobado: alumno.notaCursada > 6}});
}
let alumnosModificadosDificilSoloLectura: readonly  AlumnoModificado[] = alumnosModificadosDificil;
console.log(alumnosModificadosDificilSoloLectura)


let alumnosModificados: readonly AlumnoModificado[] = alumnos.map( (alumno: Alumno) => ({ ...alumno, ... {aprobado: alumno.notaCursada > 6}}));
console.log(alumnosModificados);

let alumnosModificadosAprobados: readonly AlumnoModificado[] = alumnosModificados.filter( (alumno: AlumnoModificado) => alumno.aprobado);
console.log(alumnosModificadosAprobados);

const promedio: number = alumnos.map(alumno => alumno.notaCursada)
                                .reduce( (promedio: number, notaCursadaActual: number, _: number, notas: number[] ) => notaCursadaActual/notas.length);
console.log(promedio)

