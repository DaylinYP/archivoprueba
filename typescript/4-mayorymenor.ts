

function ordenNumeros(): void {
    const numero1Element = document.getElementById('txtNumero1') as HTMLInputElement;
    const numero1: number = parseFloat(numero1Element.value);

    const numero2Element = document.getElementById('txtNumero2') as HTMLInputElement;
    const numero2: number = parseFloat(numero2Element.value);

    const numero3Element = document.getElementById('txtNumero3') as HTMLInputElement;
    const numero3: number = parseFloat(numero3Element.value);


    let mayor: number, medio: number, menor: number;

    //SI 1 >= 2 Y 1>= 3 ENTONCES
    if (numero1 >= numero2 && numero1 >= numero3) {
        mayor = numero1;

        if (numero2 >= numero3) {
            medio = numero2;
            menor = numero3;
        } else {
            medio = numero3;
            menor = numero2;
        }

    } else if (numero2 >= numero1 && numero2 >= numero3) {
        mayor = numero2;
        if (numero1 >= numero3) {
            medio = numero1;
            menor = numero3;
        } else {
            medio = numero3;
            menor = numero1;
        }

    } else {
        mayor = numero3;
        if (numero1 >= numero2) {
            medio = numero1;
            menor = numero2;
        } else {
            medio = numero2;
            menor = numero1;
        }
    }

    const resultado = `Mayor: ${mayor}, Medio: ${medio}, Menor: ${menor}`;
    const resultadoElement = document.getElementById('resultado') as HTMLInputElement;
    resultadoElement.value = resultado;
}

document.getElementById('btnNumero')?.addEventListener('click', function (event) {
    event.preventDefault();
    ordenNumeros();
});
