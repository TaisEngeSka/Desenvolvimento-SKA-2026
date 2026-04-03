import {produto} from "./produto.ts";

let coca: produto = new produto("cocaCola", 123, "refrigerante", 12);
//coca.valor = 15;
coca.AlteraValor(15);
coca.falar();

console.log(coca.buscarDescricao() );
