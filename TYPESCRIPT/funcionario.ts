export abstract class funcionario {
    public nome: string = " ";
    protected salario: number = 0;

    constructor(nome:string, salario:number){
        this.nome = nome;
        this.AlteraSalario (salario);
    }

    buscarNome(){ // get (para apenas exibir o que esta privado para outros)
        return this.nome;
    }

    AlteraSalario (salario:number){
        if (salario < 1000){
            console.log ("ERRO!!");
        } else {
            this.salario = salario;
        }

    }

    exibir (){
        console.log (`Olá! Sou ${this.nome}, recebo ${this.salario}`);
    }
    
    abstract ferias (dias:number):string;
    abstract ganharAumento (aumento:number):string;
}