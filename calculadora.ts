export class calculadora {
  resultado: number = 0;

  exibirResultado() {
    console.log(`O resultado é: ${this.resultado}`);
  }
  multiplicar(a: number, b: number) {
    this.resultado = a * b;
  }
  somar(a: number, b: number) {
    this.resultado = a + b;
  }
  dividir(a: number, b: number) {
    this.resultado = a / b;
  }
  subtrair(a: number, b: number) {
    this.resultado = a - b;
  }
}
