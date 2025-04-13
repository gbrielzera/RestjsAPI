"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudantesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const estudante_entity_1 = require("./entities/estudante.entity");
const cidade_entity_1 = require("../cidades/entities/cidade.entity");
let EstudantesService = class EstudantesService {
    estudantesRepository;
    cidadeRepository;
    constructor(estudantesRepository, cidadeRepository) {
        this.estudantesRepository = estudantesRepository;
        this.cidadeRepository = cidadeRepository;
    }
    async create(createEstudanteDto) {
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
    async findOne(id) {
        const estudante = await this.estudantesRepository.findOne({
            where: { id },
            relations: ["cidade"],
        });
        if (!estudante) {
            throw new Error("Estudante não encontrado");
        }
        return estudante;
    }
    async update(id, updateEstudanteDto) {
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
        if (updateEstudanteDto.nome)
            estudante.nome = updateEstudanteDto.nome;
        if (updateEstudanteDto.matricula) {
            estudante.matricula = updateEstudanteDto.matricula;
        }
        if (updateEstudanteDto.email)
            estudante.email = updateEstudanteDto.email;
        if (updateEstudanteDto.dtNascimento) {
            estudante.dtNascimento = updateEstudanteDto.dtNascimento;
        }
        return this.estudantesRepository.save(estudante);
    }
    async remove(id) {
        const result = await this.estudantesRepository.delete(id);
        if (result.affected === 0) {
            throw new Error("Estudante não encontrado");
        }
        return { message: "Estudante removido com sucesso" };
    }
};
exports.EstudantesService = EstudantesService;
exports.EstudantesService = EstudantesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(estudante_entity_1.Estudante)),
    __param(1, (0, typeorm_1.InjectRepository)(cidade_entity_1.Cidade)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EstudantesService);
//# sourceMappingURL=estudantes.service.js.map