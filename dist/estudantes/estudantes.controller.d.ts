import { EstudantesService } from './estudantes.service';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { UpdateEstudanteDto } from './dto/update-estudante.dto';
export declare class EstudantesController {
    private readonly estudantesService;
    constructor(estudantesService: EstudantesService);
    create(createEstudanteDto: CreateEstudanteDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEstudanteDto: UpdateEstudanteDto): string;
    remove(id: string): string;
}
