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
exports.CidadesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cidade_entity_1 = require("./entities/cidade.entity");
const uf_entity_1 = require("../ufs/entities/uf.entity");
let CidadesService = class CidadesService {
    cidadesRepository;
    ufsRepository;
    constructor(cidadesRepository, ufsRepository) {
        this.cidadesRepository = cidadesRepository;
        this.ufsRepository = ufsRepository;
    }
    async create(createCidadeDto) {
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
    findOne(id) {
        return this.cidadesRepository.findOne({
            where: { id },
            relations: ["uf"],
        });
    }
    async update(id, updateCidadeDto) {
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
    remove(id) {
        return this.cidadesRepository.delete(id);
    }
};
exports.CidadesService = CidadesService;
exports.CidadesService = CidadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cidade_entity_1.Cidade)),
    __param(1, (0, typeorm_1.InjectRepository)(uf_entity_1.Uf)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CidadesService);
//# sourceMappingURL=cidades.service.js.map