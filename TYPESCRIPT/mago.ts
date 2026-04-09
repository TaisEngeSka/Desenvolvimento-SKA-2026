import {personagem } from "./personagem.ts"

export class Mago  extends personagem { // "extends" faz com que essa classe carro seja filha da classe funcionario.
    constructor (nome:string, forca : number, vida: number){
        super (nome, forca, vida);
    }  

    
    public atacar(persona: personagem): void {
        console.log (`${this.nome} ataca o personagem ${persona.nome}`);
        persona.sofrerAtaque (this.forca);
        if (this.vida < 50){
        persona.regenerar(10);
        }
    }
}