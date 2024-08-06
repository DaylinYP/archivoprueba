document.getElementById('mostradorTexto')!.addEventListener('click', () => {

    const textoElement = document.getElementById('cadenaTexto') as HTMLInputElement;
    const texto: string = textoElement.value;

    const textoInvertido: string = texto.split('').reverse().join('');

    const resultadoElement = document.getElementById('resultado') as HTMLInputElement;
    resultadoElement.value = textoInvertido;
});
