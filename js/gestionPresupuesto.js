// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global

let presupuesto = 0.0;

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

    console.log(`Tu presupuesto es de ${presupuesto} €`);
}

function CrearGasto(descripcion, valor) {
    // TODO

    this.descripcion = descripcion;
    this.valor = (typeof valor == "number" && valor >= 0) ? valor : 0;

}

var gasto = new CrearGasto();


// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
