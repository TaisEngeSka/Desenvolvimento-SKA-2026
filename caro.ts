import  { veiculo } from "./exemploTeste.ts"

export class Carro extends veiculo {  // "extends" faz com que essa classe carro seja filha da classe veículo.
    public ano: number = 0; 
}

let fusca: Carro = new Carro("gti", 1999);
fusca.ano = 2012;
fusca.marca = "gti";
fusca.velocidade = 100; 

fusca.acelerar(900);
fusca.exibir();
