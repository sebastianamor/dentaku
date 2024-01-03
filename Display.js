class display{
    constructor(displayValorAnterior,displayValorActual) {
        this.displayValorActual = displayValorAnterior;
        this.displayValorAnterior = displayValorActual;
        this.calculador = new Calculadora();
        this.valorActual = "";
        this.displayValorAnterior = "";
    }

    agregarNumero(numero) {
        this.valorActual = numero;
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;

    }
}