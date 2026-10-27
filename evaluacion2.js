/*
===============================================================================
EVALUACIÓN 2 - RETO SEMANAL
Módulo 4: Fundamentos de programación (Semana 10)
*/

// -----------------------------------------------------------------------------
// RETO 1 - EJERCICIO 1
// Pregunta: Crear una función que reciba un arreglo y retorne el último elemento.
// -----------------------------------------------------------------------------

function ultimoElemento(arreglo) {
    if (!Array.isArray(arreglo) || arreglo.length === 0) {
        return undefined;
    }

    return arreglo[arreglo.length - 1];
}

// Ejemplo: Entrada [4, 8, 5, 3] | Salida esperada: 3
console.log("Ejercicio 1:", ultimoElemento([4, 8, 5, 3]));


// -----------------------------------------------------------------------------
// RETO 1 - EJERCICIO 2
// Pregunta: Recibir un arreglo y un número, y devolver un nuevo arreglo con el
// número agregado al final. Usar el operador spread.
// -----------------------------------------------------------------------------

function agregarAlFinal(arreglo, numero) {
    return [...arreglo, numero];
}

// Ejemplo: [2, 7, 5, 11] y 9 | Salida: [2, 7, 5, 11, 9]
console.log("Ejercicio 2:", agregarAlFinal([2, 7, 5, 11], 9));


// -----------------------------------------------------------------------------
// RETO 1 - EJERCICIO 3
// Pregunta: Recibir un arreglo de números y retornar el promedio de sus elementos.
// -----------------------------------------------------------------------------

function calcularPromedio(arreglo) {
    if (!Array.isArray(arreglo) || arreglo.length === 0) {
        return 0;
    }

    const suma = arreglo.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / arreglo.length;
}

// Ejemplo: [2, 6, 1, 8] | Salida esperada: 4.25
console.log("Ejercicio 3:", calcularPromedio([2, 6, 1, 8]));


// -----------------------------------------------------------------------------
// RETO 1 - EJERCICIO 4
// Pregunta: Retornar un número con la suma de todos los números pares del arreglo.
// -----------------------------------------------------------------------------

function sumarNumerosPares(arreglo) {
    return arreglo
        .filter(numero => numero % 2 === 0)
        .reduce((suma, numero) => suma + numero, 0);
}

// Ejemplo: [1, 2, 5, 8, 9, 12, 2, 3] | Salida esperada: 24
console.log("Ejercicio 4:", sumarNumerosPares([1, 2, 5, 8, 9, 12, 2, 3]));


// -----------------------------------------------------------------------------
// RETO 1 - EJERCICIO 5
// Pregunta: Crear booleanoArray() que una dos arreglos y retorne true si el
// arreglo resultante tiene longitud mayor o igual a 10; de lo contrario, false.
// -----------------------------------------------------------------------------

function booleanoArray(arreglo1, arreglo2) {
    const arregloNuevo = [...arreglo1, ...arreglo2];
    console.log("Arreglo unido del ejercicio 5:", arregloNuevo);

    return arregloNuevo.length >= 10;
}

// Ejemplo: 6 elementos + 4 elementos | Salida esperada: true
console.log("Ejercicio 5:", booleanoArray(
    [2, 5, 2, 3, 7, 2],
    [1, 5, 3, 3]
));


// -----------------------------------------------------------------------------
// RETO 1 - EJERCICIO 6
// Pregunta: Crear funcionArray() que una dos arreglos de enteros y multiplique
// cada elemento del arreglo unido por dos.
// -----------------------------------------------------------------------------

function funcionArray(arreglo1, arreglo2) {
    return [...arreglo1, ...arreglo2].map(numero => numero * 2);
}

// Ejemplo: [2, 5, 2] y [1, 5, 3] | Salida: [4, 10, 4, 2, 10, 6]
console.log("Ejercicio 6:", funcionArray([2, 5, 2], [1, 5, 3]));


// -----------------------------------------------------------------------------
// RETO 1 - EJERCICIO 7
// Pregunta: Guardar la contraseña "password" y pedir al usuario que la ingrese.
// La comparación no debe distinguir entre mayúsculas y minúsculas.
// -----------------------------------------------------------------------------

function verificarContrasena() {
    const contrasenaGuardada = "password";
    const contrasenaIngresada = prompt("Introduce la contraseña:");

    if (contrasenaIngresada !== null &&
        contrasenaIngresada.toLowerCase() === contrasenaGuardada.toLowerCase()) {
        alert("La contraseña es correcta");
        return true;
    }

    alert("La contraseña es incorrecta");
    return false;
}

// Para probar el ejercicio 7, ejecuta en la consola: verificarContrasena()


// -----------------------------------------------------------------------------
// RETO 1 - EJERCICIO 8
// Pregunta: Calcular el precio de entrada según la edad:
// menor de 4 años: gratis; de 4 a 18 años: 5 €; mayor de 18 años: 10 €.
// -----------------------------------------------------------------------------

function calcularPrecioEntrada(edad) {
    if (!Number.isFinite(edad) || edad < 0) {
        return "Edad no válida";
    }

    if (edad < 4) {
        return "La entrada es gratis";
    } else if (edad <= 18) {
        return "El costo de la entrada es 5€";
    } else {
        return "El costo de la entrada es 10€";
    }
}

function solicitarPrecioEntrada() {
    const edad = Number(prompt("Introduce tu edad:"));

    if (Number.isNaN(edad)) {
        alert("Por favor, introduce una edad válida.");
        return;
    }

    alert(calcularPrecioEntrada(edad));
}

// Ejemplo del documento: edad 16 | Salida: 5€
console.log("Ejercicio 8 (ejemplo):", calcularPrecioEntrada(16));
// Para pedir la edad por pantalla, ejecuta: solicitarPrecioEntrada()


// -----------------------------------------------------------------------------
// RETO 1 - EJERCICIO 9
// Pregunta: Para tributar, la persona debe ser mayor de 18 años y ganar al
// menos 1000 € mensuales. Mostrar si tiene que tributar o no.
// -----------------------------------------------------------------------------

function debeTributar(edad, ingresosMensuales) {
    return edad > 18 && ingresosMensuales >= 1000;
}

function consultarTributacion() {
    const edad = Number(prompt("Introduce tu edad:"));
    const ingresos = Number(prompt("¿Cuáles son tus ingresos mensuales?"));

    if (!Number.isFinite(edad) || !Number.isFinite(ingresos) ||
        edad < 0 || ingresos < 0) {
        alert("Introduce una edad e ingresos válidos.");
        return;
    }

    alert(debeTributar(edad, ingresos)
        ? "Sí tienes que tributar"
        : "No tienes que tributar");
}

// Ejemplo: edad 21 e ingresos 1350 | Salida: true
console.log("Ejercicio 9 (ejemplo):", debeTributar(21, 1350));
// Para solicitar los datos, ejecuta: consultarTributacion()


// -----------------------------------------------------------------------------
// RETO 1 - EJERCICIO 10
// Pregunta: Solicitar el diámetro y el grosor de una rueda.
// a) Clasificarla como grande, mediana o pequeña.
// b) Avisar si el grosor es inferior al recomendado según las condiciones dadas.
// -----------------------------------------------------------------------------

function evaluarRueda(diametro, grosor) {
    let tipoRueda;

    if (diametro > 1.4) {
        tipoRueda = "La rueda es para un vehículo grande.";
    } else if (diametro > 0.8) {
        tipoRueda = "La rueda es para un vehículo mediano.";
    } else {
        tipoRueda = "La rueda es para un vehículo pequeño.";
    }

    let avisoGrosor = "";

    if ((diametro > 1.4 && grosor < 0.4) ||
        (diametro > 0.8 && diametro <= 1.4 && grosor < 0.25)) {
        avisoGrosor = "El grosor para esta rueda es inferior al recomendado.";
    }

    return { tipoRueda, avisoGrosor };
}

function solicitarDatosRueda() {
    const diametro = Number(prompt("Ingrese el diámetro de una rueda (metros):"));
    const grosor = Number(prompt("Ingrese el grosor de la rueda (metros):"));

    if (!Number.isFinite(diametro) || !Number.isFinite(grosor) ||
        diametro < 0 || grosor < 0) {
        alert("Introduce valores numéricos válidos y no negativos.");
        return;
    }

    const resultado = evaluarRueda(diametro, grosor);
    alert(resultado.tipoRueda +
        (resultado.avisoGrosor ? "\n" + resultado.avisoGrosor : ""));
}

// Ejemplo del documento: diámetro 1.1 y grosor 0.24
console.log("Ejercicio 10 (ejemplo):", evaluarRueda(1.1, 0.24));
// Para solicitar los datos, ejecuta: solicitarDatosRueda()


// -----------------------------------------------------------------------------
// RETO 1 - EJERCICIO 11
// Pregunta: Con los datos de cinco personas, crear funciones para:
// 1) Encontrar personas con salario mayor a 1200.
// 2) Encontrar la primera persona cuyo hobby sea cantar.
// 3) Retornar true si al menos una persona tiene como hobby leer.
// -----------------------------------------------------------------------------

const personas = [
    { nombre: "boris", hobby: "correr", salario: 2000 },
    { nombre: "luis", hobby: "cantar", salario: 1500 },
    { nombre: "carmen", hobby: "cocinar", salario: 800 },
    { nombre: "percy", hobby: "cantar", salario: 1100 },
    { nombre: "rosa", hobby: "leer", salario: 3000 }
];

function personasConSalarioMayorA1200(listaPersonas) {
    return listaPersonas.filter(persona => persona.salario > 1200);
}

function primeraPersonaQueCanta(listaPersonas) {
    return listaPersonas.find(persona =>
        persona.hobby.toLowerCase() === "cantar"
    ) || null;
}

function alguienTieneHobbyLeer(listaPersonas) {
    return listaPersonas.some(persona =>
        persona.hobby.toLowerCase() === "leer"
    );
}

console.log("Ejercicio 11 - Salario mayor a 1200:",
    personasConSalarioMayorA1200(personas));
console.log("Ejercicio 11 - Primera persona que canta:",
    primeraPersonaQueCanta(personas));
console.log("Ejercicio 11 - ¿Alguien tiene como hobby leer?:",
    alguienTieneHobbyLeer(personas));


// -----------------------------------------------------------------------------
// RETO 1 - EJERCICIO 12
// Pregunta: Guardar en un array los turnos semanales del servicio. Crear una
// función que reciba el día y devuelva quién está encargado; si no existe, indicar
// que no hay servicio. El día debe consultarse por prompt.
// -----------------------------------------------------------------------------

const turnosServicio = [
    { dia: "lunes", persona: "María" },
    { dia: "martes", persona: "Luis" },
    { dia: "miércoles", persona: "Antonia" },
    { dia: "jueves", persona: "Pedro" },
    { dia: "viernes", persona: "Marisa" }
];

function servicio(dia) {
    const diaNormalizado = dia.trim().toLocaleLowerCase("es");
    const turno = turnosServicio.find(item => item.dia === diaNormalizado);

    return turno
        ? `Este día se encarga ${turno.persona}`
        : "No hay servicio ese día";
}

function consultarServicio() {
    const dia = prompt("Introduce el día de la semana:");
    if (dia === null || dia.trim() === "") {
        alert("No ingresaste un día.");
        return;
    }

    alert(servicio(dia));
}

// Ejemplo: servicio("Lunes") | Salida: "Este día se encarga María"
console.log("Ejercicio 12 (ejemplo):", servicio("Lunes"));
// Para consultar el día por pantalla, ejecuta: consultarServicio()


// -----------------------------------------------------------------------------
// RETO 1 - EJERCICIO 13
// Pregunta: Crear una función que reciba el nombre de un producto y devuelva
// su precio. Monitor: 200 €, teclado: 20 €, ratón: 10 €.
// -----------------------------------------------------------------------------

const listaPrecios = [
    ["monitor", 200],
    ["teclado", 20],
    ["ratón", 10]
];

function precio(nombreProducto) {
    const productoBuscado = nombreProducto.trim().toLocaleLowerCase("es");
    const productoEncontrado = listaPrecios.find(
        producto => producto[0] === productoBuscado
    );

    return productoEncontrado ? productoEncontrado[1] : null;
}

function consultarPrecioProducto() {
    const producto = prompt("¿Qué producto deseas consultar? (monitor, teclado, ratón)");
    if (producto === null || producto.trim() === "") {
        alert("No ingresaste un producto.");
        return;
    }

    const precioProducto = precio(producto);
    alert(precioProducto !== null
        ? `El precio de ${producto} es ${precioProducto}€`
        : "Producto no encontrado");
}

// Ejemplo: precio("monitor") | Salida: 200
console.log("Ejercicio 13 (ejemplo):", precio("monitor"));
// Para consultar un producto por pantalla, ejecuta: consultarPrecioProducto()


// -----------------------------------------------------------------------------
// RETO 2 - PROYECTO: CAJERO AUTOMÁTICO
// Pregunta: Crear un diseño usando HTML y CSS que simule la interacción con un
// cajero automático.
// Solución: Esta función genera la interfaz, los estilos y la interacción desde
// JavaScript. Ejecútala en una página abierta en el navegador.
// -----------------------------------------------------------------------------

function iniciarCajeroAutomatico() {
    // Evita crear la interfaz dos veces.
    if (document.getElementById("cajero-automatico-app")) {
        return;
    }

    const estilos = document.createElement("style");
    estilos.id = "estilos-cajero-automatico";
    estilos.textContent = `
        #cajero-automatico-app {
            font-family: Arial, Helvetica, sans-serif;
            max-width: 440px;
            margin: 30px auto;
            padding: 24px;
            color: #f8fafc;
            background: linear-gradient(145deg, #172554, #0f172a);
            border-radius: 22px;
            box-shadow: 0 18px 45px rgba(15, 23, 42, .25);
        }
        #cajero-automatico-app * { box-sizing: border-box; }
        #cajero-automatico-app h2 { margin: 0 0 8px; text-align: center; }
        #cajero-automatico-app .subtitulo {
            text-align: center; color: #cbd5e1; margin: 0 0 20px;
        }
        #cajero-automatico-app .pantalla {
            min-height: 95px; padding: 18px; margin-bottom: 16px;
            border: 1px solid #475569; border-radius: 12px;
            background: #020617; color: #86efac; line-height: 1.5;
        }
        #cajero-automatico-app .saldo {
            font-size: 25px; font-weight: 700; margin-top: 6px;
        }
        #cajero-automatico-app .botones {
            display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
        }
        #cajero-automatico-app button {
            border: 0; border-radius: 10px; padding: 13px 10px;
            cursor: pointer; font-weight: 700; font-size: 14px;
            background: #2563eb; color: white;
        }
        #cajero-automatico-app button:hover { background: #1d4ed8; }
        #cajero-automatico-app button.secundario { background: #475569; }
        #cajero-automatico-app button.peligro { background: #b91c1c; }
        #cajero-automatico-app .campo { margin: 14px 0; }
        #cajero-automatico-app label {
            display: block; margin-bottom: 7px; color: #e2e8f0;
        }
        #cajero-automatico-app input {
            width: 100%; padding: 12px; border-radius: 9px;
            border: 1px solid #64748b; font-size: 16px;
        }
        #cajero-automatico-app .pie {
            margin-top: 18px; text-align: center; font-size: 12px;
            color: #94a3b8;
        }
    `;
    document.head.appendChild(estilos);

    const cajero = document.createElement("section");
    cajero.id = "cajero-automatico-app";
    cajero.innerHTML = `
        <h2>CAJERO AUTOMÁTICO</h2>
        <p class="subtitulo">Simulación educativa · Cuenta de prueba</p>
        <div class="pantalla" id="cajero-mensaje" role="status" aria-live="polite">
            Bienvenido. Selecciona una operación.
        </div>
        <div class="pantalla">
            Saldo disponible
            <div class="saldo" id="cajero-saldo">S/ 1,000.00</div>
        </div>
        <div class="campo">
            <label for="cajero-monto">Monto en soles (S/)</label>
            <input id="cajero-monto" type="number" min="0.01" step="0.01"
                   placeholder="Ej. 50.00" inputmode="decimal">
        </div>
        <div class="botones">
            <button id="cajero-consultar">Consultar saldo</button>
            <button id="cajero-retirar">Retirar dinero</button>
            <button id="cajero-depositar">Depositar dinero</button>
            <button id="cajero-transferir" class="secundario">Simular transferencia</button>
            <button id="cajero-movimientos" class="secundario">Ver movimientos</button>
            <button id="cajero-salir" class="peligro">Finalizar sesión</button>
        </div>
        <div class="pie">Demo sin conexión bancaria real. No ingreses datos personales.</div>
    `;

    document.body.appendChild(cajero);

    let saldo = 1000;
    const movimientos = [];

    const mensaje = texto => {
        document.getElementById("cajero-mensaje").textContent = texto;
    };

    const actualizarSaldo = () => {
        document.getElementById("cajero-saldo").textContent =
            "S/ " + saldo.toLocaleString("es-PE", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
    };

    const leerMonto = () => {
        const valor = Number(document.getElementById("cajero-monto").value);
        if (!Number.isFinite(valor) || valor <= 0) {
            mensaje("Ingresa un monto válido mayor que cero.");
            return null;
        }
        return Math.round(valor * 100) / 100;
    };

    document.getElementById("cajero-consultar").addEventListener("click", () => {
        mensaje("Tu saldo disponible es S/ " + saldo.toFixed(2) + ".");
    });

    document.getElementById("cajero-retirar").addEventListener("click", () => {
        const monto = leerMonto();
        if (monto === null) return;

        if (monto > saldo) {
            mensaje("Operación rechazada: no tienes saldo suficiente.");
            return;
        }

        saldo = Math.round((saldo - monto) * 100) / 100;
        movimientos.push(`Retiro: -S/ ${monto.toFixed(2)}`);
        actualizarSaldo();
        mensaje(`Retiro realizado correctamente: S/ ${monto.toFixed(2)}.`);
    });

    document.getElementById("cajero-depositar").addEventListener("click", () => {
        const monto = leerMonto();
        if (monto === null) return;

        saldo = Math.round((saldo + monto) * 100) / 100;
        movimientos.push(`Depósito: +S/ ${monto.toFixed(2)}`);
        actualizarSaldo();
        mensaje(`Depósito simulado correctamente: S/ ${monto.toFixed(2)}.`);
    });

    document.getElementById("cajero-transferir").addEventListener("click", () => {
        const monto = leerMonto();
        if (monto === null) return;

        if (monto > saldo) {
            mensaje("Transferencia rechazada: saldo insuficiente.");
            return;
        }

        saldo = Math.round((saldo - monto) * 100) / 100;
        movimientos.push(`Transferencia simulada: -S/ ${monto.toFixed(2)}`);
        actualizarSaldo();
        mensaje(`Transferencia de prueba realizada por S/ ${monto.toFixed(2)}.`);
    });

    document.getElementById("cajero-movimientos").addEventListener("click", () => {
        mensaje(movimientos.length
            ? "Movimientos: " + movimientos.join(" | ")
            : "Todavía no hay movimientos registrados.");
    });

    document.getElementById("cajero-salir").addEventListener("click", () => {
        mensaje("Sesión finalizada. Puedes cerrar esta demostración.");
        document.getElementById("cajero-monto").disabled = true;
        cajero.querySelectorAll("button").forEach(boton => {
            if (boton.id !== "cajero-salir") boton.disabled = true;
        });
    });
}

// El cajero se inicia automáticamente cuando este archivo se carga en un
// navegador dentro de una página HTML. Si se ejecuta en Node.js, esta parte
// no se inicia porque no existe document.
if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", iniciarCajeroAutomatico);
    } else {
        iniciarCajeroAutomatico();
    }
}
