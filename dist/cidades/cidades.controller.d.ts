import { CidadesService } from './cidades.service';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
export declare class CidadesController {
    private readonly cidadesService;
    constructor(cidadesService: CidadesService);
    create(createCidadeDto: CreateCidadeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCidadeDto: UpdateCidadeDto): string;
    remove(id: string): string;
}
