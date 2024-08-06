class OperacionesPoo {//Las clases inician con mayúscula
    //atributos ( caracteristicas = variables )
    //cuando está en privado se puede usar adentro de la clase nada más osea está encapsulado
    private numero1: number = 0; //elemento numero1 que va a ser de tipo number y va a iniciar con 0
    private numero2: number = 0;
    private resultado: number = 0;

    //métodos ( funciones )
    public asignarNumero1(valor: number) {//método que va a tener un parámetro () y cuando se llame
        //se le tiene que dar un valor de tipo numérico "valor:number"
        this.numero1 = valor; //metodo que permite asignar al valor al atributo numero1
    }
    public asignarNumero2(valor: number) {
        this.numero2 = valor;//La palabra this me permite asignar valor a los atributos de esta clase, me da acceso a los private
    }
    public sumar(): string {
        this.resultado = this.numero1 + this.numero2;
        return "La suma es: " + this.resultado;
    }
    public restar(): string {
        this.resultado = this.numero1 - this.numero2;
        return "La resta es: " + this.resultado;
    }
    public multiplicar(): string {
        this.resultado = this.numero1 * this.numero2;
        return "La multiplicación es: " + this.resultado;
    }
    public dividir(): string {
        this.resultado = this.numero1 / this.numero2;
        return "La división es: " + this.resultado;
    }
}//FINALIZA CLASE



/*CÓMO LO VA A OPERAR*/


//crear un objeto de tipo OperacionesPoo = instanciar la clase OperacionesPoo
const operacionesPoo = new OperacionesPoo();
let divDatos = document.getElementById('datos');

function obtenerDatos() {
    //asignando a los atributos del objeto los valores de los controles del formulario
    operacionesPoo.asignarNumero1(
        parseFloat((document.getElementById("txtNumero1") as HTMLInputElement).value)
    );
    operacionesPoo.asignarNumero2(
        parseFloat((document.getElementById("txtNumero2") as HTMLInputElement).value)
    );
}
function sumar() {
    obtenerDatos();
    divDatos.textContent = operacionesPoo.sumar();
}
function restar() {
    obtenerDatos();
    divDatos.textContent = operacionesPoo.restar();
}
function multiplicar() {
    divDatos.textContent = operacionesPoo.multiplicar();
}
function dividir() {
    divDatos.textContent = operacionesPoo.dividir();
}
//CLASES SON LOS MOLDES
//METODOS SON ACCIONES