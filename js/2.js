console.clear();
let numerosArray =[-1,3,4,2,6];
let numMenor;   

function numeroMenor(arreglo){
    numMenor=Math.min.apply(null, arreglo);
    //Añade el número mayor del arreglo a través de una función
    document.getElementById("HTMLnumeroMenor").innerHTML= numMenor;
    console.log(numMenor);
}

    //Añadir al HTML el arreglo
    document.getElementById("HTMLarreglo").innerHTML= numerosArray;
    
    // Ejecuta la función numeroMenor
    numeroMenor(numerosArray);

