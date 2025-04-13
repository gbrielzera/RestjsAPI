import { Uf } from 'src/ufs/entities/uf.entity';
import { Estudante } from 'src/estudantes/entities/estudante.entity';
export declare class Cidade {
    id: number;
    nome: string;
    uf: Uf;
    estudantes: Estudante[];
}
