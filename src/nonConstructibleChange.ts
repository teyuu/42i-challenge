function nonConstructibleChange(arr: number[]): number {

    //Si el array esta vacio devolvemos 1
    if (arr.length === 0) return 1;
    // Ordenamos el array en orden ascendente
    arr.sort((a, b) => a - b);

    // Variable para almacenar el cambio acumulado mientras se recorre el array.
    let change = 0;

    // Recorremos el array para calcular el cambio no constructible.
    for (let coin of arr) {
        if (coin > change + 1) return change + 1;
        change += coin;
    }

    return change + 1;
}

