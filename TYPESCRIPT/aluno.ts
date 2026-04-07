export class aluno {
    readonly nome: string = " ";
    idade : number = 0;
    private nota : number = 0;

    constructor(Nome:string, Idade:number){
        this.nome=Nome;
        this.idade=Idade;
    }

    apresentacao (){
        console.log (`Olá! Eu sou ${this.nome} e tenho ${this.idade} anos. Minha nota é ${this.nota}  `);
    }

    TrocarNota (Nota:number){
        if (Nota > 10 || Nota < 10){
            console.log ("ERRO!!");
        } else {
            this.nota = Nota;
        }
    }
}