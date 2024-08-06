function esNumeroPrimo(numero: number): boolean {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function verificarPrimo(): void {
    const numeroElement: HTMLInputElement = document.getElementById('txtNumero') as HTMLInputElement;
    const numero: number = parseInt(numeroElement.value);

    const esPrimo: boolean = esNumeroPrimo(numero);

    const resultadoElement: HTMLInputElement = document.getElementById('resultado') as HTMLInputElement;
    resultadoElement.value = esPrimo ? "El número es primo" : "El número no es primo";
}

document.getElementById('btnPrimo')!.addEventListener('click', verificarPrimo);
