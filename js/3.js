// HTMLnumRepetidos

console.clear();
numAnadidos = 0;
let numerosArray = new Array;
console.log(typeof(numerosArray));
let unicosElementos = [];
let vecesRepetido = [];
let botonEjecutar = document.querySelector("#botonEjecutar");
let botonPop = document.querySelector("#botonPop");
let aux = {}; // Dicionario

function numeroRepetido(arreglo) {
    aux = {};
    arreglo.forEach(function (x) {
        aux[x] = (aux[x] || 0) + 1;
    });

    // Es un ForEach
    for (const [key, value] of Object.entries(aux)) {
        document.getElementById("HTMLnumRepetidos").innerHTML += "<p>El número " + key + " se repite " + value + " veces.</p>";
    }
}

botonEjecutar.addEventListener("click", function (event) {
    event.preventDefault();
    console.clear();

    // borrar el span de todo
    document.getElementById("numerosArray").innerHTML = "";
    document.getElementById("numAnadidos").innerHTML = "";
    document.getElementById("numeroInput").innerHTML = "";
    document.getElementById("HTMLError").innerHTML = "";
    document.getElementById("HTMLnumRepetidos").innerHTML = "";

    let form = document.querySelector("#formEjecutar");
    let numeroForm = form.numeroInput.value;

    if (numeroForm == "") {
        console.log("No escribiste nada, vuelve a escribir el número por favor");
        document.getElementById("HTMLError").innerHTML = "No escribiste nada, vuelve a escribir el número por favor";
        return false;
    } else if (isNaN(numeroForm)) {
        console.log("¿Escríbiste un número?, solo acepto números, vuelve a escribir el número por favor");
        document.getElementById("HTMLError").innerHTML = "¿Escríbiste un número?, solo acepto números, vuelve a escribir el número por favor";
        return false;
    }

    // Incrementando segun los números añadidos.
    numAnadidos ++;
    console.log(numAnadidos);
    console.log(numerosArray);

    // Actualizando elemento en HTML de números añadidos
    document.getElementById("numAnadidos").innerHTML = "Lleva " + numAnadidos + " números(s) añadidos.";

    // Añade los números al array
    numerosArray.push(numeroForm);
    document.getElementById("numerosArray").innerHTML = numerosArray;

    // Función números repetidos
    numeroRepetido(numerosArray);

    // Limpia formulario
    form.reset();
});

botonPop.addEventListener("click", function (event) {
    if (numerosArray.length == 0) {
        event.preventDefault();
        document.getElementById("numeroInput").innerHTML = "";
        document.getElementById("HTMLError").innerHTML = "No puedes borrar porque no hay nada en el arreglo";
    } else {
        form = document.querySelector("#formEjecutar");
        event.preventDefault();
        console.clear();

        // borrar el span de todo
        document.getElementById("numerosArray").innerHTML = "";
        document.getElementById("numAnadidos").innerHTML = "";
        document.getElementById("numeroInput").innerHTML = "";

        // Borrar la variable de los intentos.
        numAnadidos = numAnadidos - 1;

        // Borrar última entrada.
        console.log("Antes de borrar con pop: " + numerosArray);
        numerosArray.pop();
        console.log("Después de borrar con pop: " + numerosArray);

        // Actualizar números en matriz
        document.getElementById("numerosArray").innerHTML = numerosArray;

        // Función números repetidos
        document.getElementById("HTMLnumRepetidos").innerHTML = "";
        numeroRepetido(numerosArray);

        if (numerosArray.length == 0) {
            document.getElementById("numeroInput").innerHTML = "";
            document.getElementById("HTMLError").innerHTML = "Ya no hay datos en el arreglo";
        }

    }
    // cierre del else


    // Limpia formulario
    form.reset();
});
