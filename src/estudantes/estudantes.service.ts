import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Estudante } from "./entities/estudante.entity";
import { Cidade } from "../cidades/entities/cidade.entity";
import { CreateEstudanteDto } from "./dto/create-estudante.dto";
import { UpdateEstudanteDto } from "./dto/update-estudante.dto";

@Injectable()
export class EstudantesService {
  constructor(
    @InjectRepository(Estudante)
    private estudantesRepository: Repository<Estudante>,
    @InjectRepository(Cidade)
    private cidadeRepository: Repository<Cidade>,
  ) {}

  async create(createEstudanteDto: CreateEstudanteDto) {
    const cidade = await this.cidadeRepository.findOneBy({
      id: createEstudanteDto.cidadeId,
    });

    if (!cidade) {
      throw new Error("Cidade não encontrada");
    }

    const estudante = this.estudantesRepository.create({
      nome: createEstudanteDto.nome,
      matricula: createEstudanteDto.matricula,
      email: createEstudanteDto.email,
      dtNascimento: createEstudanteDto.dtNascimento,
      cidade,
    });

    return this.estudantesRepository.save(estudante);
  }

  async findAll() {
    return this.estudantesRepository.find({
      relations: ["cidade"],
    });
  }

  async findOne(id: number) {
    const estudante = await this.estudantesRepository.findOne({
      where: { id },
      relations: ["cidade"],
    });

    if (!estudante) {
      throw new Error("Estudante não encontrado");
    }

    return estudante;
  }

  async update(id: number, updateEstudanteDto: UpdateEstudanteDto) {
    const estudante = await this.estudantesRepository.findOneBy({ id });

    if (!estudante) {
      throw new Error("Estudante não encontrado");
    }

    if (updateEstudanteDto.cidadeId) {
      const cidade = await this.cidadeRepository.findOneBy({
        id: updateEstudanteDto.cidadeId,
      });

      if (!cidade) {
        throw new Error("Cidade não encontrada");
      }
      estudante.cidade = cidade;
    }

    if (updateEstudanteDto.nome) estudante.nome = updateEstudanteDto.nome;
    if (updateEstudanteDto.matricula) {
      estudante.matricula = updateEstudanteDto.matricula;
    }
    if (updateEstudanteDto.email) estudante.email = updateEstudanteDto.email;
    if (updateEstudanteDto.dtNascimento) {
      estudante.dtNascimento = updateEstudanteDto.dtNascimento;
    }

    return this.estudantesRepository.save(estudante);
  }

  async remove(id: number) {
    const result = await this.estudantesRepository.delete(id);

    if (result.affected === 0) {
      throw new Error("Estudante não encontrado");
    }

    return { message: "Estudante removido com sucesso" };
  }
}
