import {readCSV} from 'danfojs-node';
import { DataFrame } from 'danfojs-node/dist/danfojs-base';

async function main() {
    let df: DataFrame;
    try {
        df = await readCSV('sales_data_sample.csv') // TODO: poner el link al repositorio de git
    } catch (e) {
        console.log('Ocurrió un error leyendo el archivo. Saliendo')
        return;
    }
    if (!!df) {
        df.head().print(); // Imprimimos los primeros valores del archivo, en formato tabla
        console.log('Media:', df.PRICEEACH.mean()) // Accedemos a la columna PRICEEACH y encontramos la media
        console.log('Mínimo:', df.PRICEEACH.min(), 'Máximo:', df.PRICEEACH.max()) // Accedemos a la columna PRICEEACH y encontramos el minimo y el máximo
        let groupbyDealSize = df.groupby(['DEALSIZE']) // Agrupamos por DEALSIZE
        groupbyDealSize.agg({'PRICEEACH': 'mean'}).print(); // Se imprime la media del PRICEEACH, agrupando por DEALSIZE
    }
}

main();

