"use strict";
(() => {
  // src/personagem.ts
  var personagem = class {
    constructor(nome, forca, vida, dano, defesa, imagem) {
      this.nome = "personagem";
      this.forca = 0;
      this.vida = 0;
      this.dano = 0;
      this.defesa = 0;
      this.imagem = "";
      this.nome = nome;
      this.forca = forca;
      this.vida = vida;
      this.dano = dano;
      this.defesa = defesa;
      this.imagem = imagem;
    }
    isContinuaVivo() {
      return this.vida > 0;
    }
    sofrerAtaque(dano) {
      this.vida = this.vida - dano;
      this.exibirMsg(
        `${this.nome} recebeu ${dano} de dano, Vida atual ${this.vida}`
      );
    }
    getVida() {
      return this.vida;
    }
    getImg() {
      return this.imagem;
    }
    gerarAtaque() {
      let maximoAtk = 3;
      return Math.floor(Math.random() * maximoAtk);
    }
    sofrerAaque(dano, defesa) {
      let danoReal = dano - defesa * 0.1;
      this.vida -= danoReal;
    }
    regenerar(extra) {
      return this.vida += extra;
    }
    exibirMsg(mensagem) {
      document.getElementById("console").innerHTML += "<p>" + mensagem + "<p>";
    }
  };

  // src/guerreiro.ts
  var guer = class extends personagem {
    // "extends" faz com que essa classe seja filha da classe original.
    constructor(nome, forca, vida, dano, defesa) {
      super(nome, forca, vida, dano, defesa, "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/player1.jpg");
    }
    atacar(persona) {
      if (this.gerarAtaque() == 0) {
        this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
        persona.sofrerAtaque(this.forca + 5);
      } else if (this.gerarAtaque() == 1) {
        this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
        persona.sofrerAtaque(this.forca + 10);
      } else if (this.gerarAtaque() == 2) {
        this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
        persona.sofrerAtaque(this.forca + 15);
      } else {
        this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
        persona.sofrerAtaque(this.forca + 30);
      }
      if (this.vida < 150) {
        persona.regenerar(10);
      }
    }
  };

  // src/mago.ts
  var Mago = class extends personagem {
    // "extends" faz com que essa classe carro seja filha da classe funcionario.
    constructor(nome, forca, vida, dano, defesa) {
      super(nome, forca, vida, dano, defesa, "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/player2.jpg");
    }
    atacar(persona) {
      if (this.gerarAtaque() == 0) {
        this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
        persona.sofrerAtaque(this.forca + 5);
      } else if (this.gerarAtaque() == 1) {
        this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
        persona.sofrerAtaque(this.forca + 10);
      } else if (this.gerarAtaque() == 2) {
        this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
        persona.sofrerAtaque(this.forca + 15);
      } else {
        this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
        persona.sofrerAtaque(this.forca + 30);
      }
      if (this.vida < 150) {
        persona.regenerar(10);
      }
    }
  };

  // src/jogo.ts
  var jogo = class {
    async inicial(player1, player2) {
      let turno = 1;
      this.atualizarInterface(player1, player2);
      while (player1.isContinuaVivo() && player2.isContinuaVivo()) {
        player1.exibirMsg("\n ================= turno" + turno + "===================");
        player1.atacar(player2);
        this.atualizarInterface(player1, player2);
        await this.esperaTempo();
        if (!player2.isContinuaVivo()) {
          break;
        }
        player2.atacar(player1);
        this.atualizarInterface(player1, player2);
        await this.esperaTempo();
        turno += 1;
      }
      if (player1.isContinuaVivo()) {
        player1.exibirMsg(`${player1.nome} ganhou a luta.`);
      } else {
        player1.exibirMsg(`${player2.nome} ganhou a luta.`);
      }
    }
    buscaComponenteHTML(id) {
      return document.getElementById(id);
    }
    atualizarInterface(jogadorUm, jogadorDois) {
      document.getElementById("imgJogadorUm").src = jogadorUm.getImg();
      document.getElementById("imgJogadorDois").src = jogadorDois.getImg();
      this.buscaComponenteHTML("saudeUm").textContent = "HP: " + jogadorUm.getVida();
      this.buscaComponenteHTML("saudeDois").textContent = "HP: " + jogadorDois.getVida();
      this.buscaComponenteHTML("nomeUm").textContent = jogadorUm.nome;
      this.buscaComponenteHTML("nomeDois").textContent = jogadorDois.nome;
    }
    esperaTempo() {
      return new Promise((X) => setTimeout(X, 800));
    }
  };
  function construirJogo() {
    let mago = new Mago("mago", 10, 200, 15, 20);
    let guerer = new guer("guerreiro", 10, 200, 15, 20);
    let game = new jogo();
    game.inicial(mago, guerer);
  }
  document.getElementById("botaoJogar").addEventListener("click", construirJogo);
})();
