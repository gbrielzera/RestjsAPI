import { Repository } from "typeorm";
import { Estudante } from "./entities/estudante.entity";
import { Cidade } from "../cidades/entities/cidade.entity";
import { CreateEstudanteDto } from "./dto/create-estudante.dto";
import { UpdateEstudanteDto } from "./dto/update-estudante.dto";
export declare class EstudantesService {
    private estudantesRepository;
    private cidadeRepository;
    constructor(estudantesRepository: Repository<Estudante>, cidadeRepository: Repository<Cidade>);
    create(createEstudanteDto: CreateEstudanteDto): Promise<Estudante>;
    findAll(): Promise<Estudante[]>;
    findOne(id: number): Promise<Estudante>;
    update(id: number, updateEstudanteDto: UpdateEstudanteDto): Promise<Estudante>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
