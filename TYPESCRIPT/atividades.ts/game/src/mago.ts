import {personagem } from "./personagem.ts"

export class Mago  extends personagem { // "extends" faz com que essa classe carro seja filha da classe funcionario.
    constructor(nome: string, forca: number, vida: number, dano: number, defesa: number) {
    super(nome, forca, vida, dano, defesa, "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/player2.jpg");
    }  

    
    public atacar(persona: personagem): void {
        if (this.gerarAtaque() == 0){
            this.exibirMsg (`${this.nome} ataca o personagem ${persona.nome}`);
            persona.sofrerAtaque (this.forca + 5);
        } else if (this.gerarAtaque() == 1){
            this.exibirMsg (`${this.nome} ataca o personagem ${persona.nome}`);
            persona.sofrerAtaque (this.forca + 10);
        }else if (this.gerarAtaque() == 2){
            this.exibirMsg (`${this.nome} ataca o personagem ${persona.nome}`);
            persona.sofrerAtaque (this.forca + 15);
        } else {
            this.exibirMsg (`${this.nome} ataca o personagem ${persona.nome}`);
            persona.sofrerAtaque (this.forca + 30);
        }
        
        if (this.vida < 150){
        persona.regenerar(10);
        }
    }
}