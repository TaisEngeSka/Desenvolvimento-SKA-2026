import {funcionario } from "./funcionario.ts"

export class gerente extends funcionario {  // "extends" faz com que essa classe carro seja filha da classe funcionario.
    public cargo: string = " gerente";
    
    constructor (nome:string, cargo:string, salario:number){
        super (nome, salario);
        this.cargo = cargo;

    }

    mandarAlguem (){
        console.log (`trabalha mais!!`);
    }

     ferias (dias: number):string{
        if (dias > 40 || dias < 0 ){
            console.log ("Erro! Quantidade de dias inválido");
        }
        return " "
    }
    ganharAumento (aumento: number):string{
        if (aumento > 40 || aumento < 0 ){
           return "Erro! Quantidade de aumento invalida!";
        }
        return "Você ganhou aumento!";
    }
}