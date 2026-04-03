class contador {
    // static define que aqla variável é apenas 1 para o projeto inteiro
    static total: number = 0; 
    public nome: string = " ";

    constructor (nome:string){
        this.nome = nome;
        contador.total++;
    }

    static resetar (): void {
        contador.total = 0;
    }
}

export class veiculo {
    public marca: string = " ";
    public velocidade : number = 0;

    constructor(marca:string, velocidade:number){
        this.marca = marca;
        this.velocidade = velocidade;
    }

    acelerar (velocidade:number){
        this.velocidade += velocidade;
    }

    exibir (){
        console.log (`marca ${this.marca} ${this.velocidade} km/h`);
    }

}