// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global

var gastos;
var idgasto;

var presupuesto = 0.0;

function actualizarPresupuesto() {
    // TODO

    if(typeof nuevopresupuesto == "number" && nuevopresupuesto >= 0)
    {
        presupuesto = nuevopresupuesto;

        console.log(presupuesto);
        
    }
    else
    {
        alert("El valor introducido no es valido");
    }

}

function mostrarPresupuesto() {
    // TODO

    let texto = `Tu presupuesto es de ${presupuesto} €`;

    return texto;

    console.log(`Tu presupuesto es de ${presupuesto} €`);
}

function CrearGasto(descripcion, valor, fecha = [], etiqueta = []) {
    // TODO

    this.descripcion = descripcion;
    this.valor = (typeof valor == "number" && valor >= 0) ? valor : 0;
    this.etiqueta = Array.isArray(etiqueta) ? etiqueta : [];


    //Consultado en chatgpt
    let parsedFecha = Date.parse(fecha);
    if (parsedFecha) {
        this.fecha = new Date(parsedFecha);
    } else {
        this.fecha = new Date();
    }

    this.mostrarGasto = function() {
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
    }

    this.actualizarDescripcion = function(nuevaDescripcion) {
        this.descripcion = nuevaDescripcion;
    }

    this.actualizarValor = function(nuevoValor) {
        if (typeof nuevoValor === "number" && nuevoValor >= 0) {
            this.valor = nuevoValor;
        } else {
            console.error("Error: El valor introducido no es válido o es negativo.");
        }
    }
}

function listarGastos() {
    //todo

    console.log(gastos);

    return gastos;
}

function anyadirGasto() {
    //todo

    id = id + idgasto;

    return id;
}

function borrarGasto() {
    //todo
}

function calcularTotalGastos() {
    //todo
}

function calcularBalance() {
    //todo
}


// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance,
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
