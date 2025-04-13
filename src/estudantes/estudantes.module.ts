import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EstudantesService } from "./estudantes.service";
import { EstudantesController } from "./estudantes.controller";
import { Estudante } from "./entities/estudante.entity";
import { Cidade } from "../cidades/entities/cidade.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Estudante, Cidade])],
  controllers: [EstudantesController],
  providers: [EstudantesService],
})
export class EstudantesModule {}
