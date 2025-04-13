import { Repository } from "typeorm";
import { Uf } from "./entities/uf.entity";
import { CreateUfDto } from "./dto/create-uf.dto";
import { UpdateUfDto } from "./dto/update-uf.dto";
export declare class UfsService {
    private ufsRepository;
    constructor(ufsRepository: Repository<Uf>);
    create(createUfDto: CreateUfDto): Promise<Uf>;
    findAll(): Promise<Uf[]>;
    findOne(id: number): Promise<Uf | null>;
    update(id: number, updateUfDto: UpdateUfDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
