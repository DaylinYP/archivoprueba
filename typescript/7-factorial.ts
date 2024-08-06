function numPerfecto(numero: number): boolean {
    let sumaDivisores = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    return sumaDivisores === numero;
}

function esNumPerfecto(): void {
    const numeroElement: HTMLInputElement = document.getElementById('txtNumero') as HTMLInputElement;
    const numero: number = parseInt(numeroElement.value);

    const esPerfecto: boolean = numPerfecto(numero);

    const resultadoElement: HTMLInputElement = document.getElementById('resultado') as HTMLInputElement;
    resultadoElement.value = esPerfecto ? "El número es perfecto" : "El número no es perfecto";
}

document.getElementById('btnPerfecto').addEventListener('click', esNumPerfecto);
