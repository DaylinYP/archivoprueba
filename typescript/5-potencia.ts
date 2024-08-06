

class PotenciaNumero {
    private base: number = 0;
    private exponente: number = 0;
    private resultado: number = 0;

    public asignarBase(base: number) {
        this.base = base;
    }
    public asignarExponente(exponente: number) {
        this.exponente = exponente;
    }
    public potencia(): string {
        this.resultado = (this.base ** this.exponente);
        return "Resultado: " + this.resultado;
    }
}

const potenciaNumero = new PotenciaNumero();


function obtenerPotencia() {
    potenciaNumero.asignarBase(
        parseFloat((document.getElementById('txtBase') as HTMLInputElement).value)
    );
    potenciaNumero.asignarExponente(
        parseFloat((document.getElementById('txtExponente') as HTMLInputElement).value)
    );
}
function potencia() {
    obtenerPotencia();
    let resultado = document.getElementById('resultado') as HTMLInputElement;
    resultado.value = potenciaNumero.potencia();

}

