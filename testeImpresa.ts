import {funcionario } from "./funcionario.ts"
import {gerente } from "./gerente.ts" 

let joao: gerente = new gerente ("joao", "gerente", 15000);
joao.cargo = "gerente de vendas";
joao.exibir();
joao.mandarAlguem();

