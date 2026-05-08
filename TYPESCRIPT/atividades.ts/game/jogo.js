"use strict";
(() => {
  // src/personagem.ts
  var personagem = class {
    constructor(nome, forca, vida, dano, defesa, imagem, imgtomouDano) {
      this.nome = "personagem";
      this.forca = 0;
      this.vida = 0;
      this.vidaMax = 0;
      this.dano = 0;
      this.defesa = 0;
      this.imagem = "";
      this.imagemPadrao = "";
      this.imagemTomouDano = "";
      this.nome = nome;
      this.forca = forca;
      this.vida = vida;
      this.dano = dano;
      this.defesa = defesa;
      this.imagem = imagem;
      this.imagemPadrao = imagem;
      this.imagemTomouDano = imgtomouDano;
      this.vidaMax = vida;
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
    setImg(img) {
      this.imagem = img;
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
    alterarImgSofrerAtaque() {
      this.imagem = this.imagemTomouDano;
    }
  };

  // src/guerreiro.ts
  var guer = class extends personagem {
    // "extends" faz com que essa classe seja filha da classe original.
    constructor(nome, forca, vida, dano, defesa) {
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
    atacar(persona) {
      let dano = 0;
      let img = this.getImg();
      if (this.gerarAtaque() == 0) {
        this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
        dano = 5;
        this.setImg(
          "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/guerA1.png"
        );
      } else if (this.gerarAtaque() == 1) {
        this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
        dano = 10;
        this.setImg(
          "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/guerA1.png"
        );
      } else if (this.gerarAtaque() == 2) {
        this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
        dano = 15;
        this.setImg(
          "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/gueraA2.png"
        );
      } else {
        this.exibirMsg(`${this.nome} ataca o personagem ${persona.nome}`);
        this.setImg(
          "file:///C:/Users/Aluno/Desktop/Ta%C3%ADs/Desenvolvimento-SKA-2026/TYPESCRIPT/atividades.ts/game/imgs/guerA3.png"
        );
        dano = 30;
      }
      if (this.vida < 150) {
        persona.regenerar(10);
      }
      persona.alterarImgSofrerAtaque();
      persona.sofrerAaque(dano, 0);
    }
  };

  // src/mago.ts
  var Mago = class extends personagem {
    // "extends" faz com que essa classe carro seja filha da classe funcionario.
    constructor(nome, forca, vida, dano, defesa) {
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
    atacar(persona) {
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
  };

  // src/jogo.ts
  var jogo = class {
    async inicial(player1, player2) {
      let turno = 1;
      this.atualizarInterface(player1, player2);
      while (player1.isContinuaVivo() && player2.isContinuaVivo()) {
        player1.exibirMsg(
          "\n ================= turno" + turno + "==================="
        );
        player1.atacar(player2);
        this.attImg(player1, player2);
        this.atualizarInterface(player1, player2);
        player2.alterarImgSofrerAtaque();
        await this.esperaTempo();
        player1.setImg(player1.imagemPadrao);
        player2.setImg(player2.imagemPadrao);
        this.attImg(player1, player2);
        if (!player2.isContinuaVivo()) {
          break;
        }
        player2.atacar(player1);
        this.attImg(player1, player2);
        this.atualizarInterface(player1, player2);
        await this.esperaTempo();
        player2.setImg(player2.imagemPadrao);
        this.attImg(player1, player2);
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
    attImg(jogadorUm, jogadorDois) {
      this.buscaComponenteHTML("imgJogadorUm").src = jogadorUm.getImg();
      this.buscaComponenteHTML("imgJogadorDois").src = jogadorDois.getImg();
    }
    atualizarInterface(jogadorUm, jogadorDois) {
      this.buscaComponenteHTML("saudeUm").textContent = "\u{1D58D}\u{1D595}: " + jogadorUm.getVida();
      this.buscaComponenteHTML("saudeDois").textContent = "\u{1D58D}\u{1D595}: " + jogadorDois.getVida();
      this.buscaComponenteHTML("playerDoisPorcentagem").style.width = jogadorDois.getVida() * 100 / jogadorDois.vidaMax + "%";
      this.buscaComponenteHTML("playerUmPorcentagem").style.width = jogadorUm.getVida() * 100 / jogadorUm.vidaMax + "%";
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
