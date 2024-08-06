function esNumeroPerfecto(numero: number): boolean {
    let sumaDivisores = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    return sumaDivisores === numero;
}

function verificarNumeroPerfecto(): void {
    const numeroElement = document.getElementById('txtNumero') as HTMLInputElement;
    const numero: number = parseInt(numeroElement.value);

    const esPerfecto: boolean = esNumeroPerfecto(numero);

    const resultadoElement = document.getElementById('resultado') as HTMLInputElement;
    resultadoElement.value = esPerfecto ? "El número es perfecto" : "El número no es perfecto";
}

document.getElementById('btnPerfecto').addEventListener('click', verificarNumeroPerfecto);
