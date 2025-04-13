import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Uf } from "./entities/uf.entity";
import { CreateUfDto } from "./dto/create-uf.dto";
import { UpdateUfDto } from "./dto/update-uf.dto";

@Injectable()
export class UfsService {
  constructor(
    @InjectRepository(Uf)
    private ufsRepository: Repository<Uf>,
  ) {}

  create(createUfDto: CreateUfDto) {
    const uf = this.ufsRepository.create(createUfDto);
    return this.ufsRepository.save(uf);
  }

  findAll() {
    return this.ufsRepository.find();
  }

  findOne(id: number) {
    return this.ufsRepository.findOneBy({ id });
  }

  update(id: number, updateUfDto: UpdateUfDto) {
    return this.ufsRepository.update(id, updateUfDto);
  }

  remove(id: number) {
    return this.ufsRepository.delete(id);
  }
}
