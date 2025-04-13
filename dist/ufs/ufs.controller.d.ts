import { UfsService } from './ufs.service';
import { CreateUfDto } from './dto/create-uf.dto';
import { UpdateUfDto } from './dto/update-uf.dto';
export declare class UfsController {
    private readonly ufsService;
    constructor(ufsService: UfsService);
    create(createUfDto: CreateUfDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUfDto: UpdateUfDto): string;
    remove(id: string): string;
}
