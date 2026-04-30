(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/personagem.ts
  var personagem;
  var init_personagem = __esm({
    "src/personagem.ts"() {
      personagem = class {
        nome = "personagem";
        forca = 0;
        vida = 0;
        dano = 0;
        defesa = 0;
        constructor(nome, forca, vida, dano, defesa) {
          this.nome = nome;
          this.forca = forca;
          this.vida = vida;
          this.dano = dano;
          this.defesa = defesa;
        }
        isContinuaVivo() {
          return this.vida > 0;
        }
        sofrerAtaque(dano) {
          this.vida = this.vida - dano;
          console.log(`${this.nome} recebeu ${dano} de dano, Vida atual ${this.vida}`);
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
      };
    }
  });

  // src/guerreiro.ts
  var guer;
  var init_guerreiro = __esm({
    "src/guerreiro.ts"() {
      init_personagem();
      guer = class extends personagem {
        // "extends" faz com que essa classe seja filha da classe original.
        constructor(nome, forca, vida, dano, defesa) {
          super(nome, forca, vida, dano, defesa);
        }
        atacar(persona) {
          if (this.gerarAtaque() == 0) {
            console.log(`${this.nome} ataca o personagem ${persona.nome}`);
            persona.sofrerAtaque(this.forca + 5);
          } else if (this.gerarAtaque() == 1) {
            console.log(`${this.nome} ataca o personagem ${persona.nome}`);
            persona.sofrerAtaque(this.forca + 10);
          } else if (this.gerarAtaque() == 2) {
            console.log(`${this.nome} ataca o personagem ${persona.nome}`);
            persona.sofrerAtaque(this.forca + 15);
          } else {
            console.log(`${this.nome} ataca o personagem ${persona.nome}`);
            persona.sofrerAtaque(this.forca + 30);
          }
          if (this.vida < 150) {
            persona.regenerar(10);
          }
        }
      };
    }
  });

  // src/jogo.ts
  var jogo;
  var init_jogo = __esm({
    "src/jogo.ts"() {
      jogo = class {
        inicial(player1, player2) {
          let turno = 1;
          while (player1.isContinuaVivo() && player2.isContinuaVivo()) {
            console.log("\n ================= turno" + turno + "===================");
            player1.atacar(player2);
            if (!player2.isContinuaVivo()) {
              break;
            }
            player2.atacar(player1);
            turno += 1;
          }
          if (player1.isContinuaVivo()) {
            console.log(`${player1.nome} ganhou a luta.`);
          } else {
            console.log(`${player2.nome} ganhou a luta.`);
          }
        }
      };
    }
  });

  // src/mago.ts
  var Mago;
  var init_mago = __esm({
    "src/mago.ts"() {
      init_personagem();
      Mago = class extends personagem {
        // "extends" faz com que essa classe carro seja filha da classe funcionario.
        constructor(nome, forca, vida, dano, defesa) {
          super(nome, forca, vida, dano, defesa);
        }
        atacar(persona) {
          if (this.gerarAtaque() == 0) {
            console.log(`${this.nome} ataca o personagem ${persona.nome}`);
            persona.sofrerAtaque(this.forca + 5);
          } else if (this.gerarAtaque() == 1) {
            console.log(`${this.nome} ataca o personagem ${persona.nome}`);
            persona.sofrerAtaque(this.forca + 10);
          } else if (this.gerarAtaque() == 2) {
            console.log(`${this.nome} ataca o personagem ${persona.nome}`);
            persona.sofrerAtaque(this.forca + 15);
          } else {
            console.log(`${this.nome} ataca o personagem ${persona.nome}`);
            persona.sofrerAtaque(this.forca + 30);
          }
          if (this.vida < 150) {
            persona.regenerar(10);
          }
        }
      };
    }
  });

  // src/jogoindex.ts
  var require_jogoindex = __commonJS({
    "src/jogoindex.ts"() {
      init_guerreiro();
      init_jogo();
      init_mago();
      var mago = new Mago("mago", 10, 200, 15, 20);
      var guerer = new guer("guerreiro", 10, 200, 15, 20);
      var game = new jogo();
      game.inicial(mago, guerer);
    }
  });
  require_jogoindex();
})();
