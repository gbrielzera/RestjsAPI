import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
export declare class CidadesService {
    create(createCidadeDto: CreateCidadeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCidadeDto: UpdateCidadeDto): string;
    remove(id: number): string;
}
