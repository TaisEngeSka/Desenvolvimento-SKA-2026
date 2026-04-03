export class produto {
     nome: string = " ";        // nome do produto 
    private codigo: number = 0;      //código do produto 
    private descricao: string = "";  // descrição do produto
    private valor: number = 0;       // valor deste produto

    constructor(Nome:string, Codigo:number, Descricao:string, Valor:number){
        this.nome = Nome;
        this.codigo = Codigo;
        this.descricao = Descricao;
        this.valor = Valor;
    }

    falar (){
        console.log(`${this.nome};\ncodigo: ${this.codigo};\nDescrição: ${this.descricao}\nestá por: R$${this.valor}`);
    }
    AlteraValor (Valor:number){
       if (Valor > 100 || Valor < 0){
            console.log ("ERRO!!");
        } else {
            this.valor = Valor;
        }
    }

    buscarDescricao(){
        return this.descricao;
    }
}