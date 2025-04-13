import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { UpdateEstudanteDto } from './dto/update-estudante.dto';
export declare class EstudantesService {
    create(createEstudanteDto: CreateEstudanteDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEstudanteDto: UpdateEstudanteDto): string;
    remove(id: number): string;
}
