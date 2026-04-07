export class pessoa {
    nome: string = "Matilde";
    sobrenome : string = "Ramos Costa";
    idade : number = 56;
    altura : number = 172;
    peso : number = 80;
    naturalidade : string = "Salvador";
    anosc : number = 1970;
    genero : string = "feminino";
    cor : string = "negra";

    constructor (Nome:string, Sobrenome: string, Idade : number){
        this.nome=Nome;
        this.sobrenome=Sobrenome;
        this.idade= Idade; 
    }
    
    gritar () {
        console.log ("AAAAAAAAA");
    }
    correr (){
        console.log ("fiuuu"); // barulho do vento
    }
    falar (){
        console.log ("Olá!")
    }
    carrinho_gato (){
        console.log ("que fofinhoo e esse gatinhoo!!!!");
    }
    apresentacao (){
        console.log (`Olá! Eu sou ${this.nome} e tenho ${this.idade} anos. `);
    }
}