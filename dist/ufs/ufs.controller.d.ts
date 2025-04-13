import { UfsService } from "./ufs.service";
import { CreateUfDto } from "./dto/create-uf.dto";
import { UpdateUfDto } from "./dto/update-uf.dto";
export declare class UfsController {
    private readonly ufsService;
    constructor(ufsService: UfsService);
    create(createUfDto: CreateUfDto): Promise<import("./entities/uf.entity").Uf>;
    findAll(): Promise<import("./entities/uf.entity").Uf[]>;
    findOne(id: string): Promise<import("./entities/uf.entity").Uf | null>;
    update(id: string, updateUfDto: UpdateUfDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
