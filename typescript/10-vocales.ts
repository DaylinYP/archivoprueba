function contarVocales(): void {
    const textoElement = document.getElementById('txtTexto') as HTMLInputElement;
    const texto: string = textoElement.value;

    const resultadoElement = document.getElementById('txtVocales') as HTMLInputElement;

    const vocales: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let contador: number = 0;

    for (const char of texto) {


        if (vocales.includes(char)) {
            contador++;
        }

    }
    resultadoElement.value = contador.toString();
}
document.getElementById('btnContarVocales')!.addEventListener('click', contarVocales);
