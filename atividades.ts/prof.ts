import { aluno } from "./aluno.ts";

export class prfessor {
    private nota:number=0;
    constructor (Nota: number){
        this.nota=Nota;

    }
    atribuirNota(joao:aluno, nota: number){
        joao.TrocarNota(nota);
    }
}