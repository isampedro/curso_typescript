import * as express from 'express';
import {Request, Response} from 'express';
import Equipos from "./Consultas/Equipos";

const PORT = 3000;

async function main() {
    const equipos = new Equipos();
    await equipos.leerEquipos('equipos_mas_valiosos.xlsx');
    const app = express();

    app.listen(PORT, () => {
        console.log("El servidor está corriendo en el puerto 3000")
    })

    app.get('/equipos', (req: Request, res: Response) => {

    })
}

main();
