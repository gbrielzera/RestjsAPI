import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cidade } from "./entities/cidade.entity";
import { CreateCidadeDto } from "./dto/create-cidade.dto";
import { UpdateCidadeDto } from "./dto/update-cidade.dto";
import { Uf } from "../ufs/entities/uf.entity";

@Injectable()
export class CidadesService {
  constructor(
    @InjectRepository(Cidade)
    private cidadesRepository: Repository<Cidade>,
    @InjectRepository(Uf)
    private ufsRepository: Repository<Uf>,
  ) {}

  async create(createCidadeDto: CreateCidadeDto) {
    const uf = await this.ufsRepository.findOneBy({ id: createCidadeDto.ufId });
    if (!uf) {
      throw new Error("UF não encontrada");
    }
    const cidade = this.cidadesRepository.create({
      nome: createCidadeDto.nome,
      uf,
    });
    return this.cidadesRepository.save(cidade);
  }

  findAll() {
    return this.cidadesRepository.find({ relations: ["uf"] });
  }

  findOne(id: number) {
    return this.cidadesRepository.findOne({
      where: { id },
      relations: ["uf"],
    });
  }

  async update(id: number, updateCidadeDto: UpdateCidadeDto) {
    const cidade = await this.cidadesRepository.findOneBy({ id });
    if (!cidade) {
      throw new Error("Cidade não encontrada");
    }

    if (updateCidadeDto.ufId) {
      const uf = await this.ufsRepository.findOneBy({
        id: updateCidadeDto.ufId,
      });
      if (!uf) {
        throw new Error("UF não encontrada");
      }
      cidade.uf = uf;
    }

    if (updateCidadeDto.nome) {
      cidade.nome = updateCidadeDto.nome;
    }

    return this.cidadesRepository.save(cidade);
  }

  remove(id: number) {
    return this.cidadesRepository.delete(id);
  }
}
