// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global

let gastos = [];
let idgasto = 0;

var presupuesto = 0.0;

function actualizarPresupuesto() {
    // TODO

    if(typeof nuevopresupuesto == "number" && nuevopresupuesto >= 0)
    {
        presupuesto = nuevopresupuesto;
        
    }
    else
    {
        alert("El valor introducido no es valido");
    }

    return presupuesto
}

function mostrarPresupuesto() {
    // TODO

    let texto = `Tu presupuesto es de ${presupuesto} €`;

    return texto;

    console.log(`Tu presupuesto es de ${presupuesto} €`);
}

function CrearGasto(descripcion, valor, fecha = [], etiqueta = [], id) {
    // El parametro id no estoy seguro de que se pase de esta forma, comprobaremos en la correción
    // TODO

    this.descripcion = descripcion;
    this.valor = (typeof valor == "number" && valor >= 0) ? valor : 0;
    this.etiqueta = Array.isArray(etiqueta) ? etiqueta : [];

    id = anyadirGasto(); //llamamos la funcion anyadir gasto para que nos de la propiedad id


    //Consultado en chatgpt
    let parsedFecha = Date.parse(fecha);
    if (parsedFecha) {
        this.fecha = new Date(parsedFecha);
    } else {
        this.fecha = new Date();
    }

    this.mostrarGastoCompleto = function() {

        texto1 = `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`; 
        texto2 = `Fecha: ${this.fecha.toLocaleString}`;
        //Esta linea de codigo la he comprobado en chatgpt por que no estaba encontrando como meter el salto de linea y me ha puesto el tema de la fecha, yo me habia quedado en this.etiqueta.mas(etiqueta)
        texto3 = `Etiquetas:
        ${this.etiqueta.map(etiqueta => `- ${etiqueta}`).join("\n")}`;

        //sumo todos los textos para no encandenarlos en el return y que este mas simple
        texto4 = texto1 + texto2 + texto3;

        return texto4
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

    this.actualizarfecha = function(){

        // Intentar analizar la fecha
        let timestamp = Date.parse(fecha);
        if (!isNaN(timestamp)) {
            // Si la fecha es válida, se actualiza la propiedad fecha
            objeto.fecha = new Date(timestamp);
        }
    }

    this.añadirEtiquetas(etiqueta, nueva_etiqueta)
    {
        etiquetasExistentes = set(etiqueta);

        for (valor in nueva_etiqueta){
            if (valor != etiquetasExistentes){
                etiqueta.add(valor);
                etiquetasExistentes.add(valor);
            }
        }

    }

    this.borrarEtiquetas(etiqueta, borrarEtiqueta)
    {
        etiquetasExistentes = set(etiqueta)

        //Buscamos el valor dentro del parametro borrar etiquete
        for(valor in borrarEtiqueta){
            //si se encuentra el valor le indicamos que lo borre del listado de etiquetas
            if(valor == borrarEtiqueta){
                //Eliminamos de la lista de etiquetas la etiqueta introducida
                etiqueta.removeAt(valor);
            }
        }
    }
}

function listarGastos() {
    //todo

    console.log(gastos);

    return gastos;
}

function anyadirGasto(gasto) {
    //todo

    // Ponemos en el parametro id el valor actual de la variable global idgasto
    gasto.id = idgasto;
    //incremento en  el valor de la variable idgasto
    idgasto++;

    //pasamos el objeto gasto a la variable global
    gastos.push(gasto);

    return id;    
}

function borrarGasto(id) {
    //todo
    
    //cremoas variable eliminar que cogera la posicion donde se encuentra el gasto con el id introducidos
    let eliminar = gastos.findIndex(gasto => gasto.id == id)

    //si la posicion es distinta de -1 quiere decir que lo ha encontrado, por que nuestros objetos empiezan en 0
    if(eliminar != -1){
        //eliminamos la posicion donde se encuentra nuestro objeto y reorganizamos la lista
        gastos.slice(eliminar, 1);
    } 
}

function calcularTotalGastos() {
    //todo
    //Creamos variable para almacenar la suma y poder devolverla

    let suma = 0;

    //Variable valor le pasamos el atributo valor de nuestros objeto
    for(let valor of gastos.valor){
        //Variable suma le vamos sumando el numero introducido en la variable valor
        suma = suma + valor;
    }

    //Retornamos la suma
    return suma

}

function calcularBalance() {
    //todo

    //Creamos varible para almacenar la resta de los dos componentes
    let Balance = 0;

    //Realizamos la resta entre lo presupuesto y el calculo total de gastos, llamando a su funcion para no tener que volver a realizarla
    Balance = presupeusto - calcularTotalGastos();

    //Devolvemos la operación realizada
    return Balance
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
