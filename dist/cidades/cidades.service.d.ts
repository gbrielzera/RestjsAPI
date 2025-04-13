import { Repository } from "typeorm";
import { Cidade } from "./entities/cidade.entity";
import { CreateCidadeDto } from "./dto/create-cidade.dto";
import { UpdateCidadeDto } from "./dto/update-cidade.dto";
import { Uf } from "../ufs/entities/uf.entity";
export declare class CidadesService {
    private cidadesRepository;
    private ufsRepository;
    constructor(cidadesRepository: Repository<Cidade>, ufsRepository: Repository<Uf>);
    create(createCidadeDto: CreateCidadeDto): Promise<Cidade>;
    findAll(): Promise<Cidade[]>;
    findOne(id: number): Promise<Cidade | null>;
    update(id: number, updateCidadeDto: UpdateCidadeDto): Promise<Cidade>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
