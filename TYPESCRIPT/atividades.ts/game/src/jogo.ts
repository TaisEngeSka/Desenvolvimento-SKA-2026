import { guer } from "./guerreiro.js";
import { Mago } from "./mago.js";
import { personagem } from "./personagem.ts";

export class jogo {
  public inicial(player1: personagem, player2: personagem) {
    let turno = 1;

    this.atualizarInterface(player1, player2);

    while (player1.isContinuaVivo() && player2.isContinuaVivo()) {
      console.log("\n ================= turno" + turno + "===================");
      player1.atacar(player2);
        this.atualizarInterface(player1, player2);
        this.esperaTempo();

      if (!player2.isContinuaVivo()) {
        break;
      }

      player2.atacar(player1);
        this.atualizarInterface(player1, player2);
        this.esperaTempo();
        turno += 1;
    }
    if (player1.isContinuaVivo()) {
      console.log(`${player1.nome} ganhou a luta.`);
    } else {
      console.log(`${player2.nome} ganhou a luta.`);
    }
  }



  buscaComponenteHTML(id:string) {
    return document.getElementById(id);
  }

  public log(mensagem: string){
     this.buscaComponenteHTML ("console")!.textContent = mensagem + "\n";
  }



  public atualizarInterface(jogadorUm: personagem, jogadorDois: personagem) {
    (document.getElementById("imgJogadorUm") as HTMLImageElement).src =
      jogadorUm.getImg();
    (document.getElementById("imgJogadorDois") as HTMLImageElement).src =
      jogadorDois.getImg();

    this.buscaComponenteHTML ("saudeUm")!.textContent = "HP: " + jogadorUm.getVida;
    this.buscaComponenteHTML ("saudeDois")!.textContent = "HP: " + jogadorDois.getVida;

    this.buscaComponenteHTML("nomeUm")!.textContent =  jogadorUm.nome;
    this.buscaComponenteHTML("nomeDois")!.textContent =  jogadorDois.nome;
  }

public esperaTempo(){
    new Promise( (X) => setTimeout( X, 800) );

}

}

function construirJogo() {
    let mago: Mago = new Mago ("mago", 10, 200, 15, 20);
    let guerer: guer = new guer ("guerreiro", 10, 200, 15, 20);

    let game: jogo = new jogo();
    game.inicial(mago,guerer);    
}

document.getElementById("botaoJogar")!. addEventListener("click", construirJogo);

