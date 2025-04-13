import { CreateUfDto } from './dto/create-uf.dto';
import { UpdateUfDto } from './dto/update-uf.dto';
export declare class UfsService {
    create(createUfDto: CreateUfDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUfDto: UpdateUfDto): string;
    remove(id: number): string;
}
