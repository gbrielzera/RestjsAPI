import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CidadesService } from "./cidades.service";
import { CidadesController } from "./cidades.controller";
import { Cidade } from "./entities/cidade.entity";
import { Uf } from "../ufs/entities/uf.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Cidade, Uf])],
  controllers: [CidadesController],
  providers: [CidadesService],
})
export class CidadesModule {}
