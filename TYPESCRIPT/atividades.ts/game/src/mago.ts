import { personagem } from "./personagem.ts";

export class Mago extends personagem {
  // "extends" faz com que essa classe carro seja filha da classe funcionario.
  constructor(
    nome: string,
    forca: number,
    vida: number,
    dano: number,
    defesa: number,
  ) {
    super(
      nome,
      forca,
      vida,
      dano,
      defesa,
      "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/magoPadrao.png",
      "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/magoDano.png"
    );
  }

  public atacar(persona: personagem): void {
    let dano = 0;
    let img = this.getImg();

    if (this.gerarAtaque() == 0) {
      this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
      dano = 5;
      this.setImg("file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/magoA1.png");  

    } else if (this.gerarAtaque() == 1) {
      this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
      dano = 10;
      this.setImg("file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/magoA1.png");  

    } else if (this.gerarAtaque() == 2) {
      this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
      dano = 15;
      this.setImg("file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/magoA2.png");  
    } else {
      this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
      this.setImg("file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/magoA3.png");  
      dano = 30;
    }

    persona.sofrerAtaque(this.forca + dano);
    persona.alterarImgSofrerAtaque();

    if (this.vida < 150) {
      persona.regenerar(10);
    }
  }
}
