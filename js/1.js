// console.clear();
numAnadidos = 0;
let numerosArray =[];
let numMayor;   
let botonEjecutar = document.querySelector("#botonEjecutar");
let botonPop = document.querySelector("#botonPop");

function numeroMayor(arreglo){
    // No funciona para números negativos.
    // for(i=0;i<arreglo.length;i++){
    //     if(arreglo[i]>numMayor){
    //         numMayor = arreglo[i];
    //     }
    // }
    numMayor=Math.max.apply(null, arreglo);
}

// document.getElementById("HTMLnumeroMayor").innerHTML= "No hay datos aun en el arreglo";

botonEjecutar.addEventListener("click",function(event){
    event.preventDefault();
    console.clear();

    //borrar el span de todo
    document.getElementById("numerosArray").innerHTML = "";
    document.getElementById("numAnadidos").innerHTML = "";
    document.getElementById("HTMLnumeroMayor").innerHTML = "";
    document.getElementById("HTMLnumeroMayorError").innerHTML = "";

    let form = document.querySelector("#formEjecutar");
    console.log(form);
    let numeroForm = form.numeroInput.value;
    console.log(numeroForm);
    
    //Incrementando segun los números añadidos.
    numAnadidos++;
    console.log(numAnadidos);

    //Actualizando elemento en HTML de números añadidos
    document.getElementById("numAnadidos").innerHTML="Lleva "+numAnadidos+" números(s) añadidos.";

    //Añade los números al array 
    numerosArray.push(Number(numeroForm));
    document.getElementById("numerosArray").innerHTML= numerosArray;

    // Ejecuta la función numeroMayor
    numeroMayor(numerosArray);

    //Añade el número mayor del arreglo a través de una función
    document.getElementById("HTMLnumeroMayor").innerHTML= numMayor;
    console.log(numMayor);

    //Limpia formulario
    form.reset();
    });

    botonPop.addEventListener("click",function(event){
        if(numerosArray.length == 0){
            event.preventDefault();
            document.getElementById("HTMLnumeroMayor").innerHTML = "";
            document.getElementById("HTMLnumeroMayorError").innerHTML= "No puedes borrar porque no hay nada en el arreglo";
        } else {
        form = document.querySelector("#formEjecutar");
        event.preventDefault();
        console.clear();

        //Se debe de volver a poner en cero la variable para que vuelva
        // a buscar en toda la matriz en caso de borrar número
        numMayor = 0;  

        //borrar el span de todo
        document.getElementById("numerosArray").innerHTML = "";
        document.getElementById("numAnadidos").innerHTML = "";
        document.getElementById("HTMLnumeroMayor").innerHTML = "";
        document.getElementById("HTMLnumeroMayorError").innerHTML = "";

        // Borrar la variable de los intentos.
        numAnadidos = numAnadidos - 1;

        // Borrar última entrada.
        console.log("Antes de borrar con pop: "+numerosArray);
        numerosArray.pop();
        console.log("Después de borrar con pop: "+numerosArray);

        // Ejecuta la función numeroMayor
        console.log("Número más alto antes: "+numMayor);
        numeroMayor(numerosArray);
        console.log("Número más alto ahora: "+numMayor);

        // Actualizar números en matriz
        document.getElementById("numerosArray").innerHTML= numerosArray;

        //Actualizando el número mayor del arreglo a través de una función
        document.getElementById("HTMLnumeroMayor").innerHTML= numMayor;
        console.log(numMayor);

        if(numerosArray.length==0){
            document.getElementById("HTMLnumeroMayor").innerHTML = "";
            document.getElementById("HTMLnumeroMayorError").innerHTML= "Ya no hay datos en el arreglo";
        }

    } //cierre del else


    //Limpia formulario
    form.reset();     
    });