import { personagem } from "./personagem.ts";

export class guer extends personagem {
  // "extends" faz com que essa classe seja filha da classe original.
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
      "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/guerPadrao.png",
    "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/guerDano.png"
    );
  }

  public atacar(persona: personagem): void {
    let dano = 0;
    let img = this.getImg();

    if (this.gerarAtaque() == 0) {
      this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
      dano = 5;
      this.setImg(
        "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/guerA1.png",
      );
    } else if (this.gerarAtaque() == 1) {
      this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
      dano = 10;
      this.setImg(
        "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/guerA1.png",
      );
    } else if (this.gerarAtaque() == 2) {
      this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
      dano = 15;
      this.setImg(
        "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/gueraA2.png",
      );
    } else {
      this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
      this.setImg(
        "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/guerA3.png",
      );
      dano = 30;
    }

    if (this.vida < 150) {
      persona.regenerar(10);
    }

    persona.alterarImgSofrerAtaque();
    persona.sofrerAaque(dano, 0);
  }
}
