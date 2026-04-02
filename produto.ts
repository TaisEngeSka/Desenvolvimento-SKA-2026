export class produto {
    private nome: string = " ";        // nome do produto 
    private codigo: number = 0;      //código do produto 
    private descricao: string = "";  // descrição do produto
    private valor: number = 0;       // valor deste produto

    falar (){
        console.log(`${this.nome};\ncodigo: ${this.codigo};\nDescrição: ${this.descricao}\nestá por: R$${this.valor}`);
    }
    gesetter(Nome:string, Valor:number){
       
    }
}