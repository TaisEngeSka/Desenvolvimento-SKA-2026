import {Mago} from "./mago.ts"
import {guer} from "./guerreiro.ts"
import { jogo } from "./jogo.ts";

let mago: Mago = new Mago ("mago", 120, 200);
let guerer: guer = new guer ("guerreiro", 100, 200);

let game: jogo = new jogo();
game.inicial(mago,guerer);

