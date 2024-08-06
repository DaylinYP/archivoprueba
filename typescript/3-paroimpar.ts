function numeroParOImpar(): void {
    const numeroElement = document.getElementById('txtNumero') as HTMLInputElement;
    const numero: number = parseFloat(numeroElement.value);
    const resultadoElement = document.getElementById('resultado') as HTMLInputElement;

    if (numero % 2 === 0) {
        resultadoElement.value = "El número es par";
    } else {
        resultadoElement.value = "El número es impar";
    }
}

document.getElementById('btnNumero')!.addEventListener('click', numeroParOImpar);