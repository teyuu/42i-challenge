

function sortedSquearedArray(arr: number[]): number[] {
    //Creamos un arreglo vacío para almacenar los nuevos valores al cuadrado
    let result: number[] = [];

    /* Recorremos el array pasado por parametro, elevando cada numero al cuadrado utilizando
       la función Math.pow y agregandolo al nuevo arreglo(result) */
    for (let number of arr) {
        result.push(Math.pow(number, 2));
    }

    //Devolvemos el array result y utilizamos la función sort para ordenar los valores, en este caso, de menor a mayor
    return result.sort((a, b) => a - b);
}

