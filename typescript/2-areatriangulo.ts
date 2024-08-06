

function calcularArea(): void {
    // Obtiene los elementos de la base y la altura
    const numero1Element = document.getElementById('txtNumero1') as HTMLInputElement;
    const numero1: number = parseFloat(numero1Element.value);

    const numero2Element = document.getElementById('txtNumero2') as HTMLInputElement;
    const numero2: number = parseFloat(numero2Element.value);


    const area: number = (numero1 * numero2) / 2;

    document.getElementById('resultado').value = "El área es " + area.toFixed(2);
}

document.getElementById('btnArea').addEventListener('click', calcularArea);
