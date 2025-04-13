import { CidadesService } from "./cidades.service";
import { CreateCidadeDto } from "./dto/create-cidade.dto";
import { UpdateCidadeDto } from "./dto/update-cidade.dto";
export declare class CidadesController {
    private readonly cidadesService;
    constructor(cidadesService: CidadesService);
    create(createCidadeDto: CreateCidadeDto): Promise<import("./entities/cidade.entity").Cidade>;
    findAll(): Promise<import("./entities/cidade.entity").Cidade[]>;
    findOne(id: string): Promise<import("./entities/cidade.entity").Cidade | null>;
    update(id: string, updateCidadeDto: UpdateCidadeDto): Promise<import("./entities/cidade.entity").Cidade>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
