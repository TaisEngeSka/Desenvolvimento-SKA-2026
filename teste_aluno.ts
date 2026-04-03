import {aluno} from "./aluno.ts";
import { prfessor } from "./prof.ts";

let al: aluno = new aluno ("marcia", 46);
al.TrocarNota(8);

let al2: aluno = new aluno ("carolina", 4);
al2.TrocarNota(10);

al.apresentacao();
al2.apresentacao();
