import Polinomica from "./Clases/Polinomica";
import Trigonometrica, {FUNCIONES_TRIGONOMETRICAS} from "./Clases/Trigonometrica";
import Composicion from "./Clases/Composicion";
import Producto from "./Clases/Producto";

function main() {
    // Definiendo funciones de formato aleatorio
    let constante3 = new Polinomica([3]); // f(x) = 3
    let equisCuadrado = new Polinomica([0,0,1]); // f(x) = x^2
    let seno = new Trigonometrica(FUNCIONES_TRIGONOMETRICAS.SIN); // f(x) = sin(x)
    let senoCuadrado = new Composicion(equisCuadrado, seno); // f(x) = (sin(x))^2
    let constantePorSeno = new Producto(seno, constante3); // f(x) = 3sin(x)

    console.log(constantePorSeno.evaluar(Math.PI/2)); // 3
    console.log(senoCuadrado.evaluar(Math.PI/4)) // 0.5
    console.log(constante3.evaluar(5), constante3.evaluar(3), constante3.evaluar(16)) // 3 3 3
    console.log(equisCuadrado.evaluar(2)) // 4
}

main();

